import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { WindowSettings } from './models';

@Component({
  selector: 'app-window-template',
  templateUrl: './window-template.component.html',
  styleUrls: ['./window-template.component.less'],
})
export class WindowTemplateComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() width: string = 'auto';
  @Input() minWidth: string = 'auto';
  @Input() height: string = 'auto';
  @Input() minHeight: string = '200px';
  @Input() title: string = '';
  @Input() resizeEnable: boolean = true;
  @Input() savePosition: boolean = false;
  @Input() storageKey: string = 'StorageConfigName.windowTemplateDefault';
  @Input()
  set visible(visible: boolean) {
    this.visible$.next(visible);
    this.detector.detectChanges();
  }
  @Input() showMinimizeButton: boolean = false;
  @Input() showFullScreenButton: boolean = false;
  @Input() set fullScreen(value: boolean) {
    this.fullScreenEnabled = value;
  }

  @Output() onClosed: EventEmitter<any> = new EventEmitter();
  @Output() onClosing: EventEmitter<any> = new EventEmitter();
  @Output() onMinimizing: EventEmitter<any> = new EventEmitter();

  private popupHtml!: HTMLElement;
  visible$ = new BehaviorSubject<boolean>(false);
  visibleSubscription$!: Subscription;
  autoSaveSubs$!: Subscription;
  settings!: WindowSettings;
  fullScreenEnabled: boolean = false;

  constructor(private detector: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    setTimeout(
      () => {
        console.log('onInit');
        
        const inputSlots = document.querySelectorAll('[slot]');
        inputSlots.forEach((slot) => {
          console.log('name', slot.getAttribute('name'));
          const container = document.querySelector(
            `slot[name='${slot.getAttribute('name')}']`
          );
          console.log('container', container);
          container?.appendChild(slot);
        });
      },
      2000,
      this
    );
  }

  ngOnInit() {
    this.visibleSubscription$ = this.visible$
      .pipe(distinctUntilChanged())
      .subscribe((visible) => {
        if (visible) {
          this.open();
        } else {
          this.close();
        }
      });

    if (this.savePosition) {
      this.autoSavePosition();
    }
    //input: <div slot="what"><div>
    //container: <slot name=what></slot>
  }

  autoSavePosition(): void {
    const savePositionSource$ = interval(1000);
    const settings$ = savePositionSource$.pipe(
      filter(() => !!this.popupHtml),
      map(() => this.getSettings(this.popupHtml, this.fullScreenEnabled))
    );
    this.autoSaveSubs$ = settings$
      .pipe(filter((tempSettings) => !_.isEqual(tempSettings, this.settings)))
      .subscribe(() => {
        this.saveSettings();
        this.loadSettings();
      });
  }

  ngOnDestroy(): void {
    this.visibleSubscription$.unsubscribe();
    this.autoSaveSubs$?.unsubscribe();
  }

  open() {
    this.visible = true;
    if (this.savePosition) this.loadSettings();
  }

  toggleFullScreen() {
    this.fullScreenEnabled = !this.fullScreenEnabled;
  }

  close() {
    const closeModel = <OnCloseModel>{ cancel: false };
    this.onClosing.emit(closeModel);
    if (this.savePosition) this.saveSettings();
    if (!closeModel.cancel) {
      this.visible = false;
      this.onClosed.emit();
    }
  }

  minimize() {
    this.onMinimizing.emit();
    this.close();
  }

  onShown(e: any) {
    if (!this.savePosition) return;
    this.popupHtml = e.component._$wrapper[0].children[0];
    if (this.settings?.window?.transform) {
      this.popupHtml.style.setProperty(
        'transform',
        this.settings.window.transform
      );
    }
    e.component._$wrapper[0].classList.remove('wait-load-settings');
  }

  loadSettings() {
    this.settings = lsGet(this.storageKey, <WindowSettings>{
      window: { fullScreen: true },
    });
    this.fullScreenEnabled = this.settings.window.fullScreen;
  }

  saveSettings() {
    lsSet(
      this.storageKey,
      this.getSettings(this.popupHtml, this.fullScreenEnabled)
    );
  }

  getSettings(popupHtml: HTMLElement, fullScreen: boolean): WindowSettings {
    const style = popupHtml?.style;
    return <WindowSettings>{
      ...this.settings,
      window: {
        transform: style.transform,
        height: style.height,
        width: style.width,
        fullScreen: fullScreen,
      },
    };
  }
}

export function lsGet(t: any, k: any): any {}
export function lsSet(t: any, k: any) {}

export interface OnCloseModel {
  cancel: boolean;
}
