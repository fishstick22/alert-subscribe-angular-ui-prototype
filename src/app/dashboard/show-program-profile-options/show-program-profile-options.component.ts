import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-show-program-profile-options',
  templateUrl: './show-program-profile-options.component.html',
  styleUrls: ['./show-program-profile-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowProgramProfileOptionsComponent implements OnInit {

  @Input() profile;
  @Input() profileProperty;
  @Input() profileOptionLabel;
  @Input() profileOptionLabelHidden = false;
  @Input() profileOptionTitle = '';

  staticReadonlyOption: string = '';

  constructor() { }

  ngOnInit() {
    this.staticReadonlyOption = this.profile[this.profileProperty] ? 'Yes' : 'No';
  }

}
