import { Component, Input, OnChanges,
         SimpleChanges, SimpleChange,
         OnInit, ViewEncapsulation } from '@angular/core';

import { FormStaticHelper } from 'app/shared/classes/form-helpers';

@Component({
  selector: 'app-show-program-profile-options',
  templateUrl: './show-program-profile-options.component.html',
  styleUrls: ['./show-program-profile-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowProgramProfileOptionsComponent implements OnInit, OnChanges {

  @Input() profile;
  @Input() profileProperty;
  @Input() profileOptionLabel;
  @Input() profileOptionLabelHidden = false;
  @Input() profileOptionTitle = '';

  staticReadonlyOption: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.profile && !changes.profile.firstChange) {
      this.staticReadonlyOption = FormStaticHelper.setReadOnlyOption(this.profile, this.profileProperty);
    }
  }
  ngOnInit() {
    // this.staticReadonlyOption = this.profile[this.profileProperty] ? 'Yes' : 'No';
    this.staticReadonlyOption = FormStaticHelper.setReadOnlyOption(this.profile, this.profileProperty);
    // if (typeof this.profile[this.profileProperty] === 'boolean') {
    //   this.staticReadonlyOption = this.profile[this.profileProperty] ? 'Yes' : 'No';

    // } else {
    // // this.staticReadonlyOption = this.profile[this.profileProperty];
    //   switch (this.profile[this.profileProperty]) {
    //     case 'Y': {
    //       this.staticReadonlyOption = 'Yes';
    //       break;
    //     }
    //     case 'N': {
    //       this.staticReadonlyOption = 'No';
    //       break;
    //     }
    //     case 'P': {
    //       this.staticReadonlyOption = 'Promote';
    //       break;
    //     }
    //     default: {
    //       this.staticReadonlyOption = 'ERR ' + this.profile[this.profileProperty];
    //       break;
    //     }
    //   }
    // }
  }

}
