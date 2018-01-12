import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';

export class ProgramsMaintModalResult {
  updateProgramProfile: ProgramProfile;
  insertProgramProfile: ProgramProfile;
  updateProgram: Program;
  insertProgram: Program;
  resultProgram: Program;
}

@Component({
  selector: 'app-programs-maintenance-modal',
  templateUrl: './programs-maintenance-modal.component.html',
  styleUrls: ['./programs-maintenance-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsMaintenanceModalComponent implements OnInit {

  @Input() configType: string = '';
  @Input() program: Program = new Program();
  @Input() programForForm: Program = new Program(); // just becasue service inits whenever
  @Input() programProfiles: ProgramProfile[] = [];

  effectiveProfile: ProgramProfile;

  programProfileOptions = AppConstants.PROGRAMPROFILEOPTIONS;

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
    console.log(this.programForForm);

    this.tomorrow.setDate(this.today.getDate() + 1);

    if (this.configType === 'add') {
      this.programProfiles = [new ProgramProfile(this.programForForm.id)];

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
      const currentEffectiveProfile: ProgramProfile = this.getCurrentEffectiveProfile(this.programForForm)[0];
      this.effectiveProfile = new ProgramProfile(this.programForForm.id, currentEffectiveProfile, true);
      this.programProfiles = [this.effectiveProfile];
      this.addProfile = true;
    }

    if (this.configType === 'expire') {
      this.programProfiles = [];
      const currentEffectiveProfile: ProgramProfile = this.getCurrentEffectiveProfile(this.programForForm)[0];
      this.programProfiles = [new ProgramProfile(this.programForForm.id, currentEffectiveProfile, true)];
      this.programProfiles[0].expiration =
        this.tomorrow.getFullYear() + '-' +
       (this.tomorrow.getMonth() + 1) + '-' +
        this.tomorrow.getDate();
      this.expireProgram = true;
    }

  }

  getCurrentEffectiveProfile(program): ProgramProfile[] {
    return program.programProfile.filter(pp => {
      if ( pp.expiration === AppConstants.UNEXPIRED) {
        return true;
      }
    });
  }

  changeProfile(currProfile: ProgramProfile) {
    // somehow this is coming in null from template?
    if (!currProfile) {
      currProfile = this.effectiveProfile;
    }
    if (this.addProfile) {
      // expire the current profile row
      currProfile.expiration = // TODO shared util method
        this.today.getFullYear() + '-' +
       (this.today.getMonth() + 1) + '-' +
        this.today.getDate();

      // insert a new profile row with tommorow effective
      const newProfile = new ProgramProfile(this.programForForm.id, currProfile);

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
      modalResult.insertProgram = this.programForForm;
    }

    if (this.configType === 'edit') {
      modalResult.updateProgram = this.programForForm;
      if (this.programProfiles.length === 2) {
        if (this.programProfiles[0].expiration !== AppConstants.UNEXPIRED) {
           modalResult.updateProgramProfile = this.programProfiles[0];
        } // else something went wrong, report error, abort save
        if (this.programProfiles[1].expiration === AppConstants.UNEXPIRED) {
           modalResult.insertProgramProfile = this.programProfiles[1];
        } // else something went wrong, report error, abort save

      }

    }

    if (this.configType === 'expire') {
      modalResult.updateProgram = this.programForForm;
      if (this.programProfiles.length === 1 &&
        this.programProfiles[0].expiration !== AppConstants.UNEXPIRED) {
        modalResult.updateProgramProfile = this.programProfiles[0];
      } // else something went wrong, report error, abort save

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

