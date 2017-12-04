import { Component, OnInit, OnChanges,
  SimpleChanges, SimpleChange,
  Input, Output, EventEmitter,
  ViewEncapsulation } from '@angular/core';

import { Program, ProgramConfigAction, ProgramStatus } from 'app/shared/model/program';
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
  // @Output() statusUpdate = new EventEmitter<any>();

  public UNEXPIRED: string = '9999-12-31';

  progressVisible: boolean = false;
  prevStatus: any = false;

  constructor() { }

  ngOnInit() {
    console.log('ProgramStatusComponent OnInit', this.program);
    this.program.status = new ProgramStatus(this.program);
    this.showProgress();
  }

  async ngOnChanges(changes: SimpleChanges) {
    console.log('ProgramStatusComponent OnChanges', changes);
    // OnChanges happens before OnInit -- just bypass that call here
    if (!this.prevStatus) {
      return;
    } else if (changes.detectChanges &&  changes.detectChanges.currentValue) {
      console.log(changes.detectChanges);
      if (changes.detectChanges.currentValue === 'expired') {
        // this.program.status = new ProgramStatus(this.program);
        this.program.status.update(this.program);
        this.showProgress();
      }
    }
    // if (this.program.programProfile && this.program.programProfile.length > 0) {
    //   this.lastProfile = this.program.programProfile[this.program.programProfile.length - 1];
    //   this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
    //   this.program.status = this.expiredProgram ? 'expired' : 'active';
    // } else {
    //   this.lastProfile =  new ProgramProfile(null);
    //   this.lastProfile.expiration = '';
    //   this.program.status = '';
    // }

    // if (this.program.status && this.lastStatus !== this.program.status) {
    //   this.showProgress();
    //   this.lastStatus = this.program.status;
    // }
  }

  private showProgress() {
    this.progressVisible = true;
    setTimeout(function() {
      // this.statusUpdate.emit(this.program.status);
      this.prevStatus = this.program.status;
      this.progressVisible = false;
    }.bind(this), 3000);
  }
}
