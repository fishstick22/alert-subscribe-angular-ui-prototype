import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  programs: Program[];
  programProfiles: ProgramProfile[];
  programConfigurations: ProgramConfiguration[];

  selectedProgram: Program;
  selectedProgramProfile: ProgramProfile;

  constructor(
    private dataApiService: DataApiService
  ) { }

  ngOnInit() {
    // this.getPrograms();
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async onProgramSelect(program: Program) {
    console.log('onProgramSelect:', program, (program instanceof Program));

    // if (program instanceof Program) {
      this.selectedProgram = program;

    // }

    // this.selectedProgramProfile = await this.findEffectiveProgramProfile(this.selectedProgram);
  }
}
