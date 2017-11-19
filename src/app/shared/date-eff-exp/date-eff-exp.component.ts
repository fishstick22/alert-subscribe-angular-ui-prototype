import { Component, OnInit, Input,
  Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ProgramConfiguration }     from 'app/shared/model/program-configuration';

@Component({
  selector: 'app-date-eff-exp',
  templateUrl: './date-eff-exp.component.html',
  styleUrls: ['./date-eff-exp.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DateEffExpComponent implements OnInit {

  @Input() dateType: string;
  @Input() progConfig: ProgramConfiguration;

  @Input() lastConfigRow: boolean;

  @Output() newDateValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  updateDateValue(newDate) {
    console.log('DateEffExpComponent updateDateValue: ', newDate.newDateValue);
    this.newDateValue.emit(newDate.newDateValue);
  }

}
