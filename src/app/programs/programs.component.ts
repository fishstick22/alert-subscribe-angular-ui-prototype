import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Program, ProgramConfigAction, ProgramStatus } from 'app/shared/model/program';
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
  // detectChanges: any = '';

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
    // this.detectChanges = index;
  }

  // private updateProgramStatus(status: ProgramStatus, program: Program) {
  //   // program.status = status;
  //   // hmm, might not need to do this now, might be overkill
  //   // .. in fact casues ExpressionChangedAfterItHasBeenCheckedError
  //   // https://stackoverflow.com/questions/44691745/angular-4-expressionchangedafterithasbeencheckederror
  //   program.detectChanges = status.statusText;
  // }

  private configureProgram(progConfigAction: ProgramConfigAction) {
    if (progConfigAction.configType === 'edit') {
      this.editProgram(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'expire') {
      this.expireProgram(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'communications') {
      this.configureProgramCommunications(progConfigAction.progId);
    }
    this.setClickedRow(null);
  }

  private async addProgram() {
    const nextProgramId = this.programs.length + 1;
    await this.programsMaintService.maintainProgramModal('add', nextProgramId);
    // this.detectChanges = 'add';
  }

  private async editProgram(progId) {
    const program: Program = this.findProgram(progId);
    await this.programsMaintService.maintainProgramModal('edit', null, program);
    // await (this.detectChanges = 'edit');
  }

  private async expireProgram(progId) {
    const program: Program = this.findProgram(progId);
    await this.programsMaintService.maintainProgramModal('expire', null, program);
    program.detectChanges = 'expired';
    // await (this.detectChanges = 'expire');
  }

  private configureProgramCommunications(progId) {
    // invoke service to manage a modal dialog allowing user to
    // configure the program-level communication configurations
    const program: Program = this.findProgram(progId);
    this.programConfigService.configureProgramModal(program);
    // this.detectChanges = 'communications';
  }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }
}
