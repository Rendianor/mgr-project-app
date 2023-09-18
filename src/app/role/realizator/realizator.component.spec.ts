/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealizatorComponent } from './realizator.component';

describe('RealizatorComponent', () => {
  let component: RealizatorComponent;
  let fixture: ComponentFixture<RealizatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
