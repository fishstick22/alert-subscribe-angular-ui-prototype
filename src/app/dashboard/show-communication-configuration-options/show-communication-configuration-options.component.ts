import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { AppConstants } from 'app/app-constants';

@Component({
  selector: 'app-show-communication-configuration-options',
  templateUrl: './show-communication-configuration-options.component.html',
  styleUrls: ['./show-communication-configuration-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowCommunicationConfigurationOptionsComponent implements OnInit {

  @Input() configuration;
  @Input() configurationProperty;
  @Input() configurationOptionLabel;
  @Input() configurationOptionLabelHidden = false;
  @Input() configurationOptionTitle = '';

  staticReadonlyOption;
  channelPriortyOpts: number[] = AppConstants.CHANNELPRIORTYOPTS;
  constructor() { }

  ngOnInit() {
    this.staticReadonlyOption = this.configuration[this.configurationProperty];
  }

}
