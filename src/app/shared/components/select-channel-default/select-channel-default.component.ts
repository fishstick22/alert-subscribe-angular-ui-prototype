import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { AppConstants } from 'app/app-constants';

const noop = () => {
};

/* tslint:disable:no-use-before-declare */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectChannelDefaultComponent),
    multi: true
};
/* tslint:enable:no-use-before-declare */

@Component({
  selector: 'app-select-channel-default',
  templateUrl: './select-channel-default.component.html',
  styleUrls: ['./select-channel-default.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class SelectChannelDefaultComponent implements OnInit, ControlValueAccessor {

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input() id: string;
  @Input() name: string;
  @Input() actualStaticValue: string;
  @Input() lastConfigRow: number;

  chanDefaultOpts = AppConstants.CHANDEFAULTOPTS;
  private innerValue: any = '';

  constructor() { }

  ngOnInit() {
    console.log('SelectChannelDefaultComponent:', this.id, this.name);
  }

  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
        this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
