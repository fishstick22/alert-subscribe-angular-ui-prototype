import { Component, OnInit, OnChanges,
  SimpleChanges, SimpleChange,
  Input, Output, EventEmitter,
  ViewEncapsulation } from '@angular/core';

import { Program, ProgramConfigAction } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';

@Component({
  selector: 'app-program-status',
  templateUrl: './program-status.component.html',
  styleUrls: ['./program-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramStatusComponent implements OnInit, OnChanges {

  @Input() program: Program;
  @Input() detectChanges: any = '';
  @Output() statusUpdate = new EventEmitter<any>();

  public UNEXPIRED: string = '9999-12-31';

  progressVisible: boolean = false;
  lastProfile: ProgramProfile;
  expiredProgram: boolean = false;
  lastStatus: any;

  constructor() { }

  ngOnInit() {
    // if (this.program.programProfile) {
    //   this.lastProfile = this.program.programProfile[this.program.programProfile.length - 1];
    //   this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
    // } else {
    //   this.lastProfile =  new ProgramProfile(null);
    //   this.lastProfile.expiration = '';
    // }

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    if (this.program.programProfile && this.program.programProfile.length > 0) {
      this.lastProfile = this.program.programProfile[this.program.programProfile.length - 1];
      this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
    } else {
      this.lastProfile =  new ProgramProfile(null);
      this.lastProfile.expiration = '';
    }

    if (this.lastStatus !== this.detectChanges) {
      this.showProgress();
      this.lastStatus = this.detectChanges;
    }
  }

  private showProgress() {
    this.progressVisible = true;
    setTimeout(function() {
      this.statusUpdate.emit(this.expiredProgram ? 'expired' : 'active');
      this.progressVisible = false;
    }.bind(this), 3000);
  }
}
