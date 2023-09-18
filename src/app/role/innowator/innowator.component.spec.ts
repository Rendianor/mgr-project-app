/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnowatorComponent } from './innowator.component';

describe('InnowatorComponent', () => {
  let component: InnowatorComponent;
  let fixture: ComponentFixture<InnowatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnowatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnowatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
