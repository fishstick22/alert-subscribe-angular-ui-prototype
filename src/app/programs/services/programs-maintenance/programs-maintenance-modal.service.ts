import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Program, ProgramStatus } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';

import { ProgramsMaintenanceModalComponent,
         ProgramsMaintModalResult } from './programs-maintenance-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ProgramsMaintenanceModalService {

  program: Program;
  programProfiles: ProgramProfile[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async maintainProgramModal(configType, nextId?: number, program?: Program) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramsMaintenanceModalComponent, modalOpts);
    const modalComp: ProgramsMaintenanceModalComponent  = modalRef.componentInstance;

    modalComp.configType = configType;

    if (configType === 'add' && nextId) {
      modalComp.program = new Program(nextId, '');
    }
    if (configType === 'edit' || configType === 'expire') {
      modalComp.program = program;
      if (!program.programProfile || program.programProfile.length === 0) {
        // hey, it could happen!
        program.programProfile = await this.findProgramProfiles(program);
        console.log(program);
        if (program.programProfile.length === 0) {
          // but if it still doesn't have one (shouldn't happen)
          program.programProfile = [new ProgramProfile(program.id)];
          program.programProfile[0].expiration = '9999-12-31';
        }
      }
      if (program.status) {
        program.status.statusText = configType;
      }
    }

    modalComp.modalInit();

    // so up until now using @JsonIdentityReference(alwaysAsId = true) on related entites in the JPA
    // so the json coming back doesn't have full related objects, just id references
    // but with Program/ProgramProfile didn't so code is dealing with responses that include the Profile
    // and the requests back to store can be Program with Profile inside
    // or, separate requests for the Profiles
    // but not both -- have to decide to stick with the original approach, which works fine for
    // everything else, or do this differently by saving the Program entirely which
    // then can include additions and updates to Profile related entities
    modalRef.result.then( async (result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureProgramModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ProgramsMaintModalResult = result.modalResult;
          // if (modalResult.updateProgramProfile) {
          //   this.updateProgramProfile(modalResult.updateProgramProfile);
          // }
          // if (modalResult.insertProgramProfile) {
          //   this.addProgramProfile(modalResult.insertProgramProfile);
          // }
          if (configType === 'add' && modalResult.insertProgram) {
            // except for a new add, the Profile creates an unresolved forward reference
            // the Program must be saved first, then the Profile will reference a valid entity
            // this.addProgram(modalResult.insertProgram);
            // this.addProgramProfile(modalResult.insertProgramProfile);
            const newProgram = await this.addProgramAndProfile(modalResult.insertProgram, modalResult.insertProgramProfile);
            if (newProgram.status && newProgram.status.statusText === 'undetermined') {
              newProgram.detectChanges = 'added';
              newProgram.status.update(newProgram);
            } else {
              newProgram.status = new ProgramStatus(this.program);
              newProgram.detectChanges = newProgram.status.statusText;
            }
          }
          if (configType === 'edit' && modalResult.updateProgram) {
            this.updateProgram(modalResult.updateProgram);
          }
          if (configType === 'expire' && modalResult.updateProgram) {
            this.updateProgram(modalResult.updateProgram);
          }
          // return configType;
        } else {
          // this would be some kind of exception
          console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
        }
        return modalComp.SAVESUCCESS;
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      // this.setClickedRow(null);
      console.log('configureProgramModal result: ', this.closeResult);
      return this.closeResult;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // this.setClickedRow(null);
      console.log('configureProgramModal result: ', this.closeResult);
      return this.closeResult;
    });
  }

  private async addProgramAndProfile(program: Program, programProfile: ProgramProfile) {
    // have to single thread these so they are done in the right order
    try {
      this.program = await this.dataApiService.createProgram(program);
      const pp = await this.dataApiService.createProgramProfile(programProfile);
      this.program.programProfile = [pp];
      console.log('addProgramAndProfile:', program, this.program);
      return this.program;
    } catch (error) {
      console.log('addProgramAndProfile error: ', error);
    }
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
      this.program = await this.dataApiService.createProgram(program);
      console.log('addProgram:', program, this.program);
    } catch (error) {
      console.log('addProgram error: ', error);
    }
  }

  private async updateProgram(program: Program) {
    try {
      this.program = await this.dataApiService.updateProgram(program);
      console.log('updateProgram:', program, this.program);
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
