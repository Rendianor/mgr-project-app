/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobilizatorComponent } from './mobilizator.component';

describe('MobilizatorComponent', () => {
  let component: MobilizatorComponent;
  let fixture: ComponentFixture<MobilizatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilizatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
