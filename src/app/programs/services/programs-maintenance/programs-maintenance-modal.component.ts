import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';

@Component({
  selector: 'app-programs-maintenance-modal',
  templateUrl: './programs-maintenance-modal.component.html',
  styleUrls: ['./programs-maintenance-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsMaintenanceModalComponent implements OnInit {

  @Input() configType: string = '';
  @Input() program: Program = new Program(); // just becasue service inits whenever

  programProfiles: ProgramProfile[] = [];

  addProfile: boolean = false;
  newProgram: boolean = false;
  expireProgram: boolean = false;

  today = new Date();
  tomorrow = new Date();

  constructor(
    private maintainProgramModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  modalInit() {
    console.log('ProgramsMaintenanceModalComponent init: ');
    console.log(this.program);

    this.tomorrow.setDate(this.today.getDate() + 1);

    if (this.configType === 'add') {
      this.programProfiles = [new ProgramProfile(this.program.id)];

      this.programProfiles[0].effective =
        this.tomorrow.getFullYear() + '-' +
       (this.tomorrow.getMonth() + 1) + '-' +
        this.tomorrow.getDate();
      this.programProfiles[0].expiration = AppConstants.UNEXPIRED;
      this.newProgram = true;
    }

    if (this.configType === 'edit') {
      // editing a program actually means creating a new row from
      // the current row, setting expiration on current
      // show only the current effective Profile row
      this.programProfiles = [];
      this.programProfiles = this.getCurrentEffectiveProfile(this.program);
      this.addProfile = true;
    }

    if (this.configType === 'expire') {
      this.programProfiles = [];
      this.programProfiles = this.getCurrentEffectiveProfile(this.program);
      this.programProfiles[0].expiration =
        this.tomorrow.getFullYear() + '-' +
       (this.tomorrow.getMonth() + 1) + '-' +
        this.tomorrow.getDate();
      this.expireProgram = true;
    }

  }

  getCurrentEffectiveProfile(program): ProgramProfile[] {
    return this.program.programProfile.filter(pp => {
      if ( pp.expiration === AppConstants.UNEXPIRED) {
        return true;
      }
    });
  }

  changeProfile(currProfile: ProgramProfile) {
    if (this.addProfile) {
      // expire the current profile row
      currProfile.expiration = // TODO shared util method
        this.today.getFullYear() + '-' +
       (this.today.getMonth() + 1) + '-' +
        this.today.getDate();

      // insert a new profile row with tommorow effective
      const newProfile = new ProgramProfile(this.program.id, currProfile);

      newProfile.effective = // TODO shared util method
        this.tomorrow.getFullYear() + '-' +
       (this.tomorrow.getMonth() + 1) + '-' +
        this.tomorrow.getDate();

      newProfile.expiration = AppConstants.UNEXPIRED;
      this.programProfiles.push(newProfile);
    }

    this.addProfile = false;
  }

  saveProgram() {
    const modalResult: ProgramsMaintModalResult = new ProgramsMaintModalResult();

    if (this.configType === 'add') {
      if (this.programProfiles.length === 1 &&
          this.programProfiles[0].expiration === AppConstants.UNEXPIRED) {
        modalResult.insertProgramProfile = this.programProfiles[0];
      }
      modalResult.insertProgram = this.program;
    }

    if (this.configType === 'edit') {
      // if profile changed (added), first update previous, add new
      // then go ahead and update the program
      if (this.programProfiles.length === 2) {
        console.log(this.programProfiles);
        console.log(this.program);

        if (this.programProfiles[0].expiration !== AppConstants.UNEXPIRED) {
          modalResult.updateProgramProfile = this.programProfiles[0];
        } // else something went wrong, report error, abort save
        if (this.programProfiles[1].expiration === AppConstants.UNEXPIRED) {
          modalResult.insertProgramProfile = this.programProfiles[1];
          this.program.programProfile.push(this.programProfiles[1]);
        } // else something went wrong, report error, abort save
        modalResult.updateProgram = this.program;
      }
    }

    if (this.configType === 'expire') {
      if (this.programProfiles.length === 1 &&
        this.programProfiles[0].expiration !== AppConstants.UNEXPIRED) {
        modalResult.updateProgramProfile = this.programProfiles[0];
      } // else something went wrong, report error, abort save
      modalResult.updateProgram = this.program;
    }

    this.maintainProgramModal.close({resultTxt: AppConstants.SAVESUCCESS, modalResult: modalResult});
  }

  private updateDateValue(newDate, pp: ProgramProfile, dateType: string) {
    console.log('ProgramsMaintenanceModalComponent updateDateValue: ', newDate, pp, dateType);
    if (dateType === 'effective') {
      pp.effective = newDate.newDateValue;
      // TODO adjust the expiration date of previous row if applicable
    }
    if (dateType === 'expiration') {
      pp.expiration = newDate.newDateValue;
    }
  }

}

export class ProgramsMaintModalResult {
  updateProgramProfile: ProgramProfile;
  insertProgramProfile: ProgramProfile;
  updateProgram: Program;
  insertProgram: Program;
}
