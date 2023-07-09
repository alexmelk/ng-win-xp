import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentService } from '../services/dynamic-component.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-host',
  templateUrl: './dynamic-host.component.html',
  styleUrls: ['./dynamic-host.component.less'],
})
export class DynamicHostComponent implements OnInit {
  @ViewChild('dynamicComponents', { read: ViewContainerRef })
  container!: ViewContainerRef;

  private onAdd$: Observable<any>;
  constructor(private dynamicService: DynamicComponentService) {
    this.onAdd$ = dynamicService.getAddComponentSource();
    this.onAdd$.subscribe(({ type, data }) => {
      setTimeout(() => {
        this.addComponent(type, data);
      }, 1);
    });
  }

  ngOnInit() {}

  private addComponent(componentType: Type<any>, model?: any) {
    const component = this.container.createComponent(componentType);

    if (model) {
      console.log(model);
      for (const key in model) {
        console.log(key);
        component.instance[key] = model[key];
      }
    }
    this.dynamicService.push(component);
  }
}
