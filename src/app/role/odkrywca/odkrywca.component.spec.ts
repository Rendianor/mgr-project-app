/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdkrywcaComponent } from './odkrywca.component';

describe('OdkrywcaComponent', () => {
  let component: OdkrywcaComponent;
  let fixture: ComponentFixture<OdkrywcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdkrywcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdkrywcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
