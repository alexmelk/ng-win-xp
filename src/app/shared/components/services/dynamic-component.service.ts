import { ComponentRef, Injectable, Type } from '@angular/core';
import { Subject, repeat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentService {
  private _components: ComponentRef<any>[] = [];
  private _addComponentSource$ = new Subject<{ type: Type<any>; data: any }>();
  constructor() {}

  create(type: Type<any>, data: any) {
    this._addComponentSource$.next({ type: type, data: data });
    console.log('create', type);
  }

  push(ref: ComponentRef<any>) {
    this._components.push(ref);
  }

  getAddComponentSource() {
    return this._addComponentSource$.asObservable();
  }
}
