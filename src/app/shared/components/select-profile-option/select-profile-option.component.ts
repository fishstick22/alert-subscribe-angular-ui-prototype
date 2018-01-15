import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

/* tslint:disable:no-use-before-declare */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectProfileOptionComponent),
    multi: true
};
/* tslint:enable:no-use-before-declare */

@Component({
  selector: 'app-select-profile-option',
  templateUrl: './select-profile-option.component.html',
  styleUrls: ['./select-profile-option.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class SelectProfileOptionComponent implements OnInit, ControlValueAccessor {

// Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input() name: string;
  @Input() label: string;
  @Input() staticValue: string;
  @Input() showHeader: boolean;
  @Input() staticReadOnly: boolean;
  @Input() dynamicPicker: string;
  @Input() profileOpts: Object[] = [{opt: 'Yes', val: 'Y'}, {opt: 'No', val: 'N'}];

  staticReadonlyOption: string;
  // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
  // The internal data model
  private innerValue: any = '';

  constructor() { }

  ngOnInit() {
  //  this.staticReadonlyOption = this.staticValue ? 'Y' : 'N';
  //  this.staticReadonlyOption = this.staticValue;
    if (this.profileOpts && this.profileOpts.length) {
      for (let i = 0; i < this.profileOpts.length; i++ ) {
        const option = this.profileOpts[i];
        if (option['val'] === this.staticValue) {
          this.staticReadonlyOption = option['opt'];
        }
      }
    } else {
      this.staticReadonlyOption = this.staticValue;
    }

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
