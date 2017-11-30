import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Program, ProgramConfigAction } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { DataApiService } from 'app/shared/services/data-api.service';

import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { ProgramsMaintenanceModalService } from './services/programs-maintenance/programs-maintenance-modal.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsComponent implements OnInit {

  programs: Program[];
  programProfiles: ProgramProfile[];
  selectedRow: number;

  constructor(
    private dataApiService: DataApiService,
    private programConfigService: ProgramConfigurationsModalService,
    private programsMaintService: ProgramsMaintenanceModalService
  ) { }

  async ngOnInit() {
    console.log('ProgramComponent ngOnInit...');
    await this.getPrograms();
    await this.getProgramProfiles();
    console.log('ProgramComponent ', this.programs, this.programProfiles);
  }

  async getProgramProfiles() {
    try {
      this.programProfiles = await this.dataApiService.getProgramProfiles();
      return this.programProfiles;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  private setClickedRow(index) {
    if (this.selectedRow === index || this.selectedRow === null ) {
      this.selectedRow = null;
    } else {
      this.selectedRow = index;
    }
  }

  private configureProgram(progConfigAction: ProgramConfigAction) {
    if (progConfigAction.configType === 'edit') {
      this.editProgram(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'delete') {
      // this.deleteProgramModal(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'communications') {
      this.configureProgramCommunications(progConfigAction.progId);
    }
    this.setClickedRow(null);
  }

  private addProgram() {
    const nextProgramId = this.programs.length + 1;
    this.programsMaintService.maintainProgramModal('add', nextProgramId);
  }

  private editProgram(progId) {
    const program: Program = this.findProgram(progId);
    this.programsMaintService.maintainProgramModal('edit', null, program);
  }

  private configureProgramCommunications(progId) {
    // invoke service to manage a modal dialog allowing user to
    // configure the program-level communication configurations
    const program: Program = this.findProgram(progId);
    this.programConfigService.configureProgramModal(program);
  }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }
}
