/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EkspertComponent } from './ekspert.component';

describe('EkspertComponent', () => {
  let component: EkspertComponent;
  let fixture: ComponentFixture<EkspertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkspertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkspertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
