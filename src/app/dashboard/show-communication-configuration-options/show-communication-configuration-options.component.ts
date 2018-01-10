import { Component, Input, OnInit, OnChanges,
         SimpleChanges, SimpleChange, ViewEncapsulation } from '@angular/core';

import { AppConstants } from 'app/app-constants';
import { FormStaticHelper } from 'app/shared/classes/form-helpers';

@Component({
  selector: 'app-show-communication-configuration-options',
  templateUrl: './show-communication-configuration-options.component.html',
  styleUrls: ['./show-communication-configuration-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowCommunicationConfigurationOptionsComponent implements OnInit, OnChanges {

  @Input() configuration;
  @Input() configurationProperty;
  @Input() configurationOptionLabel;
  @Input() configurationOptionLabelHidden = false;
  @Input() configurationOptionTitle = '';

  staticReadonlyOption;
  channelPriortyOpts: number[] = AppConstants.CHANNELPRIORTYOPTS;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.profile && !changes.profile.firstChange) {
      this.staticReadonlyOption = FormStaticHelper.setReadOnlyOption(this.configuration, this.configurationProperty);
    }
  }

  ngOnInit() {
    // this.staticReadonlyOption = this.configuration[this.configurationProperty];
    this.staticReadonlyOption = FormStaticHelper.setReadOnlyOption(this.configuration, this.configurationProperty);
  }

}
