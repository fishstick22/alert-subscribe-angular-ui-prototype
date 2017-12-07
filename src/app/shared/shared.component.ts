import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { ProgramProfileClientException } from 'app/shared/model/program-profile-client-exception';
import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedComponent implements OnInit {

  communications: Communication[];
  programs: Program[];
  programProfiles: ProgramProfile[];
  programProfileClientExceptions: ProgramProfileClientException[];
  displayComm: Communication[];

  constructor(
    private dataApiService: DataApiService
  ) { }

  ngOnInit() {
    this.getCommunications();
    this.getPrograms();
    this.getProgramProfiles();
    this.getProgramProfileClientExceptions();
    console.log('SharedComponent ngOnInit', this.communications, this.programs, this.programProfiles);
  }

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
      this.displayComm = this.communications;
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
      // return this.programs;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async getProgramProfiles() {
    try {
      this.programProfiles = await this.dataApiService.getProgramProfiles();
      // return this.programProfiles;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }


  async getProgramProfileClientExceptions() {
    try {
      this.programProfileClientExceptions = await this.dataApiService.getProgramProfileClientExceptions();
      // return this.programProfileClientExceptions;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }
}
