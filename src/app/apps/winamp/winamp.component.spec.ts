/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WinampComponent } from './winamp.component';

describe('WinampComponent', () => {
  let component: WinampComponent;
  let fixture: ComponentFixture<WinampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
