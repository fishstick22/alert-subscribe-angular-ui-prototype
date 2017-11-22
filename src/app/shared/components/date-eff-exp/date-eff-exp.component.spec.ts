import { Component, OnInit, Input,
  Output, EventEmitter }     from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';

import { DateEffExpComponent } from './date-eff-exp.component';

import { DatePickerPopupStubComponent } from 'app/shared/components/testing/stub-testing-components';

describe('Shared/Component: DateEffExpComponent', () => {
  let component: DateEffExpComponent;
  let fixture: ComponentFixture<DateEffExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateEffExpComponent, DatePickerPopupStubComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEffExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
