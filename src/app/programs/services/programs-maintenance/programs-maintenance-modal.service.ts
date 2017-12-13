import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Program, ProgramStatus } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';

import { ProgramsMaintenanceModalComponent,
         ProgramsMaintModalResult } from './programs-maintenance-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';
import { ModalStaticHelper, ModalResult } from 'app/shared/classes/modal-helpers';

export { ProgramsMaintModalResult } from './programs-maintenance-modal.component';

@Injectable()
export class ProgramsMaintenanceModalService {

  programProfiles: ProgramProfile[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) {}

  async maintainProgram(configType, nextId?: number, program?: Program): Promise<ModalResult> {
    const modalResult = new ModalResult();

    const promise = new Promise<ModalResult>((resolve, reject) => {
      this.maintainProgramModal(configType, nextId, program)
      .then( async (result) => { // hmm, mixed syntax
        if (result.resultTxt === AppConstants.SAVESUCCESS) {
          try {
            if (program && program.status) {
              program.detectChanges = 'saving';
              program.status.update(program);
            }
            modalResult.modalOutput = await this.fulfillProgramMaintenance(result, configType);
            modalResult.success = true;
          } catch (error) {
            // TODO part of larger error handling effort
          }

          modalResult.closeResult = `Closed with: ${result.resultTxt}`;
        } else {
          modalResult.closeResult = `Closed with: ${result}`;
        }
        console.log('maintainProgram', modalResult);
        resolve(modalResult);
      }, (reason) => {
        modalResult.closeResult = `Dismissed ${ModalStaticHelper.getDismissReason(reason)}`;
        reject(modalResult);
      }).catch((error) => {
        console.log('maintainProgram', error);
        reject(error);
      });
    });

    return promise;
  }

  private async fulfillProgramMaintenance(result, configType): Promise<ProgramsMaintModalResult> {
    const modalResult: ProgramsMaintModalResult = result.modalResult;
    if (configType === 'add' && modalResult.insertProgram) {
      const newProgram = await this.addProgramAndProfile(modalResult.insertProgram, modalResult.insertProgramProfile);
      console.log('fulfillProgramMaintenance add', newProgram);
      modalResult.resultProgram = newProgram;
    }
    if (configType === 'edit' && modalResult.updateProgram) {
      if (modalResult.updateProgramProfile || modalResult.insertProgramProfile) {
        // means a new profile was added (prev one expired)
        modalResult.resultProgram =
          await this.updateProgramAndProfiles(
            modalResult.updateProgram,
            modalResult.updateProgramProfile,
            modalResult.insertProgramProfile);
      } else {
        modalResult.resultProgram = await this.updateProgram(modalResult.updateProgram);
      }
    }
    if (configType === 'expire' && modalResult.updateProgram) {
      modalResult.resultProgram =
        await this.updateProgramAndProfiles(
          modalResult.updateProgram,
          modalResult.updateProgramProfile);
    }
    return modalResult;
  }

  private async addProgramAndProfile(program: Program, programProfile: ProgramProfile): Promise<Program> {
    // have to single thread these so they are done in the right order
    try {
      program = await this.dataApiService.createProgram(program);
      const pp = await this.dataApiService.createProgramProfile(programProfile);
      await (program.programProfile = [pp]);
      console.log('addProgramAndProfile:', program);
      return program;
    } catch (error) {
      console.log('addProgramAndProfile error: ', error);
    }
  }

  private async updateProgramAndProfiles(
    updateProgram: Program,
    updateProgramProfile?: ProgramProfile,
    insertProgramProfile?: ProgramProfile): Promise<Program> {
    // have to single thread these so they are done in the right order
    try {
      if (updateProgramProfile) {
        await this.dataApiService.updateProgramProfile(updateProgramProfile)
          .then(ppu => {
            for (let i = 0; i < updateProgram.programProfile.length; i++) {
              if (updateProgram.programProfile[i].id === ppu.id) {
                  updateProgram.programProfile[i] = ppu;
              }
            }
          });
      }
      if (insertProgramProfile) {
        const ppc: ProgramProfile = await this.dataApiService.createProgramProfile(insertProgramProfile);
        updateProgram.programProfile.push(ppc);
      }
      const pu = await this.dataApiService.updateProgram(updateProgram);
      console.log('addProgramAndProfile:', updateProgram);
      return updateProgram;
    } catch (error) {
      console.log('addProgramAndProfile error: ', error);
    }
  }

  private async maintainProgramModal(configType, nextId?: number, program?: Program): Promise<any> {

    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramsMaintenanceModalComponent, modalOpts);
    const modalComp: ProgramsMaintenanceModalComponent  = modalRef.componentInstance;

    // initialize all the @Inputs to the component
    modalComp.configType = configType;
    modalComp.program = (program) ? new Program(program.id, program.name) : new Program(); // shallow copy just to display
    modalComp.programForForm = await this.setupProgramForForm(configType, nextId, program);

    // OnInit has likely fired previously, invoke some initialization code
    modalComp.modalInit();

    return modalRef.result;

  }

  private async setupProgramForForm(configType, nextId?: number, program?: Program): Promise<Program> {
    if (configType === 'add' && nextId) {
      return new Program(nextId, '');
    }
    if (program && (configType === 'edit' || configType === 'expire')) {
      const programForForm: Program = new Program(program.id, program.name, program.description);
      // don't use references from existing program
      programForForm.programProfile = await this.findProgramProfiles(program);
      // but ok for these...
      programForForm.programConfiguration = program.programConfiguration;
      programForForm.programProfileClientException = program.programProfileClientException;
      return programForForm;
    }
    return null;
  }

  private async addProgramProfile(programProfile: ProgramProfile) {
    try {
      await this.dataApiService.createProgramProfile(programProfile);
      console.log('addProgramProfile:', programProfile, this.programProfiles);
    } catch (error) {
      console.log('addProgramProfile error: ', error);
    }
  }

  private async addProgram(program: Program) {
    try {
      program = await this.dataApiService.createProgram(program);
      console.log('addProgram:', program);
    } catch (error) {
      console.log('addProgram error: ', error);
    }
  }

  private async getProgramById(programId: number): Promise<Program> {
    try {
      const program: Program = await this.dataApiService.getProgramById(programId);
      console.log('getProgramById:', program);
      return program;
    } catch (error) {
      console.log('getProgramById error: ', error);
    }
  }

  private async updateProgram(program: Program): Promise<Program> {
    try {
      const updateProgram = await this.dataApiService.updateProgram(program);
      console.log('updateProgram:', program);
      return updateProgram;
    } catch (error) {
      console.log('updateProgram error: ', error);
    }
  }

  private async updateProgramProfile(programProfile: ProgramProfile): Promise<ProgramProfile> {
    try {
      const updateProgramProfile = await this.dataApiService.updateProgramProfile(programProfile);
      console.log('updateProgramProfile:', programProfile, this.programProfiles);
      return updateProgramProfile;
    } catch (error) {
      console.log('updateProgramProfile error: ', error);
    }
  }

  async getProgramProfiles(): Promise<ProgramProfile[]> {
    try {
      this.programProfiles = await this.dataApiService.getProgramProfiles();
      return this.programProfiles;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  private async findProgramProfiles(selectedProgram: Program): Promise<ProgramProfile[]> {
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
