import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModalStaticHelper, ModalResult } from 'app/shared/classes/modal-helpers';
import { Program, ProgramConfigAction, ProgramStatus } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { DataApiService } from 'app/shared/services/data-api.service';

import { ProgramClientExceptionsModalService,
         ProgramClientExceptionsModalResult } from './services/program-client-exceptions/program-client-exceptions-modal.service';
import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { ProgramsMaintenanceModalService,
         ProgramsMaintModalResult } from './services/programs-maintenance/programs-maintenance-modal.service';

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
  detectChanges: any = '';

  constructor(
    private dataApiService: DataApiService,
    private programClientExcService: ProgramClientExceptionsModalService,
    private programConfigService: ProgramConfigurationsModalService,
    private programsMaintService: ProgramsMaintenanceModalService
  ) { }

  async ngOnInit() {
    console.log('ProgramComponent ngOnInit...');
    await this.getPrograms();
    console.log('ProgramComponent ', this.programs, this.programProfiles);
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
      await this.getProgramProfiles();
      for (let i = 0; i < this.programs.length; i++) {
        this.findEffectiveProgramProfile(this.programs[i]);
      }
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async getProgramProfiles() {
    try {
      this.programProfiles = await this.dataApiService.getProgramProfiles();
      return this.programProfiles;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  findEffectiveProgramProfile(program: Program) {
    if (program && program.programProfile) {
      let profiles = program.programProfile;
      if (profiles.length !== 0 && typeof profiles[profiles.length - 1].expiration !== 'undefined') {
        return; // do nothing, everything is cool
      }
      if (profiles.length === 0 ||
         (profiles.length !== 0 && typeof profiles[profiles.length - 1] === 'number')) {
        // really only happens in the in-memory-api exception case
        profiles = this.findProgramProfiles(program);
        // yes, this is a side-effect
        program.programProfile = profiles;
        if (program.status) {
          program.status.update(program);
        }
      }
    }
  }

  private findProgramProfiles(selectedProgram: Program): ProgramProfile[] {

    return this.programProfiles.filter(pp => {
      if (typeof(pp.program) === 'number') {
        if (pp.program === selectedProgram.id) {
          return true;
        } else { return false; }
      }
    });
  }

  private setClickedRow(index) {
    this.selectedRow = (this.selectedRow === index) ? null : index;
  }

  private async addProgram() {
    const nextProgramId = this.programs[this.programs.length - 1].id + 1;
    const addResult: ModalResult = await this.programsMaintService.maintainProgram('add', nextProgramId);
    const addedProgram = addResult.modalOutput.resultProgram;
    console.log('ProgramsComponent addProgram:', addResult, addedProgram);

    if (addedProgram && !addedProgram.status) {
      addedProgram.status = new ProgramStatus(addedProgram);

    } else {
      addedProgram.status.update(addedProgram);
    }

  }

  private async configureProgram(progConfigAction: ProgramConfigAction) {
    if (progConfigAction.configType === 'edit') {
      this.editProgram(progConfigAction.progId).then( async (editResult: ModalResult) => {
        console.log('ProgramsComponent editProgram:', editResult);
        if (editResult.success) {
          // easy way out, just refresh all programs
          // await this.getPrograms();
          // pro-level, find the one program that was updated and replace it in the array
          const modalOutput: ProgramsMaintModalResult = editResult.modalOutput;
          const editProgram: Program = modalOutput.resultProgram;
          await this.replaceUpdatedProgram(editProgram);
        }
      });
    }
    if (progConfigAction.configType === 'expire') {
      const expireResult: ModalResult = await this.expireProgram(progConfigAction.progId);
      if (expireResult.success) {
        // await this.getPrograms();
        const modalOutput: ProgramsMaintModalResult = expireResult.modalOutput;
        const expireProgram: Program = modalOutput.resultProgram;
        await this.replaceUpdatedProgram(expireProgram);
      }

    }
    if (progConfigAction.configType === 'client') {
      const clientResult: ModalResult = await this.configureProgramClientExceptions(progConfigAction.progId);
      // nothing in this component view should change as a result
    }
    // if (progConfigAction.configType === 'communications') {
    //   this.configureProgramCommunications(progConfigAction.progId);
    // }
    this.setClickedRow(null);
  }

  private async editProgram(progId): Promise<ModalResult> {
    const updateProgram: Program = this.findProgram(progId);
    const result: ModalResult = await this.programsMaintService.maintainProgram('edit', null, updateProgram);
    return result;
  }

  private async expireProgram(progId): Promise<ModalResult> {
    const expireProgram: Program = this.findProgram(progId);
    const result: ModalResult = await this.programsMaintService.maintainProgram('expire', null, expireProgram);
    return result;
  }

  private async configureProgramClientExceptions(progId): Promise<ModalResult> {
    const program: Program = this.findProgram(progId);
    const result: ModalResult = await this.programClientExcService.configureProgramClientExceptions(program);
    return result;
  }

  // private configureProgramCommunications(progId) {
  //   // invoke service to manage a modal dialog allowing user to
  //   // configure the program-level communication configurations
  //   const program: Program = this.findProgram(progId);
  //   this.programConfigService.configureProgramModal(program);
  //   // this.detectChanges = 'communications';
  // }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }

  private replaceUpdatedProgram(updatedProgram: Program) {
    // Angular change detection should be taking care of this
    // must be missing something...
    const replaceProgram = this.findProgram(updatedProgram.id);
    // replaceProgram = null;
    replaceProgram.name = updatedProgram.name;
    replaceProgram.description = updatedProgram.description;
    replaceProgram.programProfile = updatedProgram.programProfile;
    replaceProgram.detectChanges = 'edited';
    if (replaceProgram && !replaceProgram.status) {
      replaceProgram.status = new ProgramStatus(replaceProgram);

    } else {
      replaceProgram.status.update(replaceProgram);
    }

  }
}
