import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Program } from 'app/shared/model/program';
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

  async maintainProgramModal(configType, program?: Program) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramsMaintenanceModalComponent, modalOpts);
    const modalComp: ProgramsMaintenanceModalComponent  = modalRef.componentInstance;

    modalComp.configType = configType;
    if (configType === 'edit') {
      modalComp.program = program;
      if (!program.programProfile) {
        // hey, it could happen!
        program.programProfile = await this.findProgramProfiles(program);
        console.log(program);
      }
    }

    modalComp.modalInit();

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureProgramModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ProgramsMaintModalResult = result.modalResult;
          if (modalResult.updateProgramProfile) {
            this.updateProgramProfile(modalResult.updateProgramProfile);
          }
          if (modalResult.insertProgramProfile) {
            this.addProgramProfile(modalResult.insertProgramProfile);
          }
          if (modalResult.updateProgram) {
            this.updateProgram(modalResult.updateProgram);
          }
          // export class ProgramsMaintModalResult {
          //   updateProgramProfile: ProgramProfile;
          //   insertProgramProfile: ProgramProfile;
          //   updateProgram: Program;
          // }
        } else {
          // this would be some kind of exception
          console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
        }
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      // this.setClickedRow(null);
      console.log('configureProgramModal result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // this.setClickedRow(null);
      console.log('configureProgramModal result: ', this.closeResult);
    });
  }

  private async addProgramProfile(programProfile: ProgramProfile) {
    try {
      await this.dataApiService.createProgramProfile(programProfile);
      console.log('addProgramProfile:', programProfile, this.programProfiles);
    } catch (error) {
      console.log('addProgramProfile error: ', error);
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
