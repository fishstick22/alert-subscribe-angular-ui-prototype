import { Component, OnInit, Input,
  Output, EventEmitter }     from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';

import { DateEffExpComponent } from './date-eff-exp.component';

////

// import { NgbDateStruct }            from '@ng-bootstrap/ng-bootstrap';
@Component({selector: 'app-date-picker-popup', template: 'stub component for testing'})
export class DatepickerPopupStubComponent  {
  @Input() dateValue: string;
  @Input() required: true;
  // @Output() newDateValue = new EventEmitter<any>();

  // dateModel: NgbDateStruct;
}
////
describe('DateEffExpComponent', () => {
  let component: DateEffExpComponent;
  let fixture: ComponentFixture<DateEffExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateEffExpComponent, DatepickerPopupStubComponent ],
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
