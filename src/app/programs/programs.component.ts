import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Program, ProgramConfigAction } from 'app/shared/model/program';
import { DataApiService } from 'app/shared/services/data-api.service';

import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsComponent implements OnInit {

  programs: Program[];
  selectedRow: number;

  constructor(
    private dataApiService: DataApiService,
    private programConfigService: ProgramConfigurationsModalService
  ) { }

  async ngOnInit() {
    console.log('ProgramComponent ngOnInit...');
    await this.getPrograms();
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

  configureProgram(progConfigAction: ProgramConfigAction) {
    if (progConfigAction.configType === 'edit') {
      // this.editProgramModal(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'delete') {
      // this.deleteProgramModal(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'communications') {
      this.configureProgramCommunications(progConfigAction.progId);
    }
    this.setClickedRow(null);
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
