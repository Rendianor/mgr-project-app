/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InspiratorComponent } from './inspirator.component';

describe('InspiratorComponent', () => {
  let component: InspiratorComponent;
  let fixture: ComponentFixture<InspiratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
