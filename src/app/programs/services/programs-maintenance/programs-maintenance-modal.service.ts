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

export class ModalResult {
  success: boolean = false;
  closeResult: string;
  modalOutput: any;
  // addProgram: Program;
}

@Injectable()
export class ProgramsMaintenanceModalService {

  // program: Program;
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
        modalResult.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        reject(modalResult);
      }).catch((error) => {
        console.log('maintainProgram', error);
        reject(error);
      });
    });

    return promise;
  }

  async fulfillProgramMaintenance(result, configType): Promise<ProgramsMaintModalResult> {
    const modalResult: ProgramsMaintModalResult = result.modalResult;
    if (configType === 'add' && modalResult.insertProgram) {
      const newProgram = await this.addProgramAndProfile(modalResult.insertProgram, modalResult.insertProgramProfile);
      console.log('fulfillProgramMaintenance add', newProgram);
      modalResult.resultProgram = newProgram;
    }
    if (configType === 'edit' && modalResult.updateProgram) {
      if (modalResult.updateProgramProfile || modalResult.insertProgramProfile) {
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

  async maintainProgramModal(configType, nextId?: number, program?: Program): Promise<any> {

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

  // async maintainProgramModalOld(configType, nextId?: number, program?: Program) {
  //   // it got too large, refactoring
  //   const modalOpts: NgbModalOptions = {
  //     size: 'lg'
  //   };
  //   const modalRef = this.modalService.open(ProgramsMaintenanceModalComponent, modalOpts);
  //   const modalComp: ProgramsMaintenanceModalComponent  = modalRef.componentInstance;

  //   modalComp.configType = configType;
  //   // don't want to use the passed-in Program directly in the form
  //   // user could make modifications then cancel/dismiss and the changes would
  //   // persist in the object even tho not saved to api
  //   // clone a separate object to use on the form, then update the changes to
  //   // the real object once user hits save, else revert to unmodified Program

  //   // this.programForForm = new Program(this.program.id, this.program.name, this.program.description);
  //   if (configType === 'add' && nextId) {
  //     modalComp.programForForm = new Program(nextId, '');
  //   }
  //   if (program && (configType === 'edit' || configType === 'expire')) {
  //     modalComp.program = program;
  //     // fetch it again to make sure it is fresh
  //     const programForForm = await this.getProgramById(program.id);

  //     if (!programForForm.programProfile || programForForm.programProfile.length === 0 ||
  //       (programForForm.programProfile.length !== 0 && typeof (programForForm.programProfile[0]) === 'number')) {
  //       // hey, it could happen!
  //       programForForm.programProfile = await this.findProgramProfiles(program);
  //       console.log(program);
  //       // if (programForForm.programProfile.length === 0) {
  //       //   // but if it still doesn't have one (shouldn't happen)
  //       //   programForForm.programProfile = [new ProgramProfile(programForForm.id)];
  //       //   programForForm.programProfile[0].expiration = AppConstants.UNEXPIRED;
  //       // }
  //     }
  //     modalComp.programForForm = programForForm;
  //     // if (program.status) {
  //     //   program.status.statusText = configType;
  //     // }
  //   }

  //   modalComp.modalInit();

  //   // so up until now using @JsonIdentityReference(alwaysAsId = true) on related entites in the JPA
  //   // so the json coming back doesn't have full related objects, just id references
  //   // but with Program/ProgramProfile didn't so code is dealing with responses that include the Profile
  //   // and the requests back to store can be Program with Profile inside
  //   // or, separate requests for the Profiles
  //   // but not both -- have to decide to stick with the original approach, which works fine for
  //   // everything else, or do this differently by saving the Program entirely which
  //   // then can include additions and updates to Profile related entities
  //   modalRef.result.then( async (result) => {
  //     if (result.resultTxt === AppConstants.SAVESUCCESS) {
  //       console.log('configureProgramModal result: ', result.modalResult);
  //       this.closeResult = `Closed with: ${result.resultTxt}`;
  //       if (result.modalResult) {
  //         const modalResult: ProgramsMaintModalResult = result.modalResult;
  //         if (configType === 'add' && modalResult.insertProgram) {
  //           const newProgram = await this.addProgramAndProfile(modalResult.insertProgram, modalResult.insertProgramProfile);
  //           // force refresh
  //           // await this.dataApiService.getPrograms();
  //           // if (newProgram.status && newProgram.status.statusText === 'undetermined') {
  //           //   newProgram.detectChanges = 'added';
  //           //   newProgram.status.update(newProgram);
  //           // } else {
  //           //   newProgram.status = new ProgramStatus(program);
  //           //   newProgram.detectChanges = newProgram.status.statusText;
  //           // }
  //         }
  //         if (configType === 'edit' && modalResult.updateProgram) {
  //           if (modalResult.updateProgramProfile || modalResult.insertProgramProfile) {
  //             const updateProgram =
  //               await this.updateProgramAndProfiles(
  //                 modalResult.updateProgram,
  //                 modalResult.updateProgramProfile,
  //                 modalResult.insertProgramProfile);
  //             // force refresh
  //             // await this.dataApiService.getPrograms();
  //           } else {
  //             const updateProgram = await this.updateProgram(modalResult.updateProgram);
  //             // force refresh
  //             // this.dataApiService.getPrograms();
  //           }
  //           // if (!editProgram.status) {
  //           //   editProgram.status = new ProgramStatus(editProgram);
  //           // } else {
  //           //   editProgram.status.update(editProgram);
  //           // }
  //           // program = editProgram;
  //           // program.detectChanges = 'edited';
  //         }
  //         if (configType === 'expire' && modalResult.updateProgram) {
  //           const expireProgram =
  //             await this.updateProgramAndProfiles(
  //               modalResult.updateProgram,
  //               modalResult.updateProgramProfile);
  //           // force refresh
  //           // await this.dataApiService.getPrograms();
  //           // if (!expireProgram.status) {
  //           //   expireProgram.status = new ProgramStatus(expireProgram);
  //           // } else {
  //           //   expireProgram.status.update(expireProgram);
  //           // }
  //           // expireProgram.detectChanges = 'expired';
  //         }
  //         return configType;
  //       } else {
  //         // this would be some kind of exception
  //         console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
  //       }
  //       return AppConstants.SAVESUCCESS;
  //     } else {
  //       this.closeResult = `Closed with: ${result}`;
  //     }
  //     // this.setClickedRow(null);
  //     console.log('configureProgramModal result: ', this.closeResult);
  //     return this.closeResult;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     // this.setClickedRow(null);
  //     console.log('configureProgramModal result: ', this.closeResult);
  //     return this.closeResult;
  //   });
  // }



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

  private async getProgramById(programId: number) {
    try {
      const program: Program = await this.dataApiService.getProgramById(programId);
      console.log('getProgramById:', program);
      return program;
    } catch (error) {
      console.log('getProgramById error: ', error);
    }
  }

  private async updateProgram(program: Program) {
    try {
      program = await this.dataApiService.updateProgram(program);
      console.log('updateProgram:', program);
      return program;
    } catch (error) {
      console.log('updateProgram error: ', error);
    }
  }

  private async updateProgramProfile(programProfile: ProgramProfile) {
    try {
      await this.dataApiService.updateProgramProfile(programProfile);
      console.log('updateProgramProfile:', programProfile, this.programProfiles);
    } catch (error) {
      console.log('updateProgramProfile error: ', error);
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

  private async findProgramProfiles(selectedProgram: Program) { // : ProgramProfile[] {
    await this.getProgramProfiles();
    return this.programProfiles.filter(pp => {
      if (typeof(pp.program) === 'number') {
        if (pp.program === selectedProgram.id) {
          // pc.program = selectedProgram;
          // if (typeof(pc.communication) === 'number') {
          //   pc.communication = this.findCommunication(<number>pc.communication);
          // }
          return true;
        } else { return false; }
      } // else if (pp.program.id === selectedProgram.id) {
      //   if (typeof(pc.communication) === 'number') {
      //     pc.communication = this.findCommunication(<number>pc.communication);
      //   }
      //   return true;
      // }
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
