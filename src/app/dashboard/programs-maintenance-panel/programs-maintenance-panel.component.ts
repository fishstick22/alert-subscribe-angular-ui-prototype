import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-programs-maintenance-panel',
  templateUrl: './programs-maintenance-panel.component.html',
  styleUrls: ['./programs-maintenance-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsMaintenancePanelComponent implements OnInit {

  @Output() programSelected = new EventEmitter<any>();

  programs: Program[];
  programProfiles: ProgramProfile[];
  programConfigurations: ProgramConfiguration[];

  selectedProgram: Program;
  selectedProgramProfile: ProgramProfile;

  programProfileOptions = [
    {'property': 'defaultOptIn', 'label': 'OptIn Def'},
    {'property': 'visibleInUi',  'label': 'UI Visible'},
    {'property': 'chanEmail',    'label': 'Email'},
    {'property': 'chanIvr',      'label': 'IVR'},
    {'property': 'chanSms',      'label': 'SMS'},
    {'property': 'chanSecure',   'label': 'Secure'},
    {'property': 'chanMail',     'label': 'Mail'},
    {'property': 'chanMobile',   'label': 'Mobile'},
    // {'property': 'effective',    'label': 'Effective'},
    // {'property': 'expiration',   'label': 'Expiration'}
  ];

  constructor(
    private dataApiService: DataApiService
  ) { }

  ngOnInit() {
    this.getPrograms();
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async onProgramSelect(event: Event) {
    console.log('onProgramSelect:', this.selectedProgram, event);

    this.selectedProgramProfile = await this.findEffectiveProgramProfile(this.selectedProgram);
    this.programSelected.emit(this.selectedProgram);
  }

  async findEffectiveProgramProfile(program: Program) {
    // all of this because some odd data in the in-memory-api
    // seems like a good idea to handle this case, tho
    if (this.selectedProgram &&
        this.selectedProgram.programProfile) {

      let profiles = this.selectedProgram.programProfile;
      if (profiles.length !== 0 &&
          profiles[profiles.length - 1].expiration === AppConstants.UNEXPIRED) {

        if (typeof profiles[profiles.length - 1] === 'number') {
          // really only happens in the in-memory-api exception case
          profiles = await this.findProgramProfiles(program);
        }
        return profiles[profiles.length - 1];
      }
      return profiles[profiles.length - 1]; // ok, the last one may be expired
    } else {
      const profiles = await this.findProgramProfiles(program);
      return profiles[profiles.length - 1];
    }

  }

  async getProgramProfiles() {
    try {
      this.programProfiles = await this.dataApiService.getProgramProfiles();
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  private async findProgramProfiles(selectedProgram: Program) { // : ProgramProfile[] {
    await this.getProgramProfiles();
    return this.programProfiles.filter(pp => {
      if (typeof(pp.program) === 'number') {
        if (pp.program === selectedProgram.id) {
          return true;
        } else { return false; }
      }
    });
  }
}
