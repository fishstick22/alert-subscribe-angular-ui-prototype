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

  programProfileOptions = AppConstants.PROGRAMPROFILEOPTIONS;

  constructor(
    private dataApiService: DataApiService
  ) { }

  async ngOnInit() {
    await this.getPrograms();
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

  async findEffectiveProgramProfile(program: Program): Promise<ProgramProfile> {
    // all of this because some odd data in the in-memory-api
    // seems like a good idea to handle this case, tho
    // TODO duplicated from programs component, should be one version shared
    if (program && program.programProfile) {
      let profiles = program.programProfile;
      if (profiles.length !== 0 && typeof profiles[profiles.length - 1].expiration !== 'undefined') {
        return profiles[profiles.length - 1];
      }
      if (profiles.length === 0 ||
         (profiles.length !== 0 && typeof profiles[profiles.length - 1] === 'number')) {
        // really only happens in the in-memory-api exception case
         profiles = await this.findProgramProfiles(program);
         // yes, this is a side-effect
         program.programProfile = profiles;
         return profiles[profiles.length - 1];
      }
    }
    // this should never happen, should throw an exception
    // but that is a whole different endeavor
    return null;
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
