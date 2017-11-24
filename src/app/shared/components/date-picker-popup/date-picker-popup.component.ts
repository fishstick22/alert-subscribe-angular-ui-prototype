import { Component, OnInit, Input, Output,
         EventEmitter, ViewEncapsulation } from '@angular/core';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker-popup',
  templateUrl: './date-picker-popup.component.html',
  styleUrls: ['./date-picker-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerPopupComponent implements OnInit {

  private attachOutsideOnClick = true;
  private delayClickOutsideInit = false;
  private clickOutsideEvents = 'click';
  private exclude = 'ngb-datepicker, .btn-light';
  private excludeBeforeClick = false;

  @Input() dateValue: string;
  @Input() required: true;
  @Output() newDateValue = new EventEmitter<any>();

  dateModel: NgbDateStruct;

  constructor() { }

  ngOnInit() {
    console.log('DatePickerPopup datevalue: ', this.dateValue);
    const inputDate = new Date(this.dateValue);
    this.dateModel = { day: inputDate.getUTCDate(), month: inputDate.getUTCMonth() + 1, year: inputDate.getUTCFullYear()};
  }

  saveDate(newDateValue: NgbDateStruct) {
    const newDate: string =
      (newDateValue) ?
        newDateValue.year + '-' + newDateValue.month + '-' + newDateValue.day :
        '';
    console.log('DatepickerPopupComponent saveDate: ', newDate );

    this.newDateValue.emit({
      newDateValue: newDate
    });
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
  }

  private onClickedOutside(e: Event, d: any) {
    console.log('Clicked outside:', e);
    d.close();
  }

}
