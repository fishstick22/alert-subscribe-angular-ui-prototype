import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

import { ProgramConfigsByCommModalComponent,
         ProgramConfigModalResult } from './prog-configs-by-comm-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ProgramConfigsByCommModalService {

  programs: Program[];
  programConfigurations: ProgramConfiguration[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async configureProgramModal(communication: Communication) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramConfigsByCommModalComponent, modalOpts);
    const modalComp: ProgramConfigsByCommModalComponent  = modalRef.componentInstance;

    // this.programs = await this.getPrograms();
    // this.programConfigurations = await this.getProgramConfigurations();

    // modalComp.name = 'Configure Program';
    modalComp.communication = communication;
    modalComp.programs = await this.getPrograms();
    modalComp.programConfigurations = await this.findProgramConfigurations(communication);
    modalComp.modalInit();

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureProgramModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ProgramConfigModalResult = result.modalResult;
          if (modalResult.prevProgConfig) {
            this.updateProgramConfiguration(modalResult.prevProgConfig);
          }
          if (modalResult.newProgConfig) {
            this.addProgramConfiguration(modalResult.newProgConfig);
          }
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

  private addProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.dataApiService.createProgramConfiguration(programConfiguration)
      .then(pc => console.log('addProgramConfiguration:', programConfiguration, this.programConfigurations))
      .catch(error =>  console.log('addProgramConfiguration error: ', error));
  }

  private updateProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.dataApiService.updateProgramConfiguration(programConfiguration)
      .then(pc => console.log('updateProgramConfiguration:', programConfiguration, this.programConfigurations))
      .catch(error =>  console.log('updateProgramConfiguration error: ', error));
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

  private findProgram(id: number): Program {
    return this.programs.find(p => p.id === id);
  }

  private async findProgramConfigurations(selectedComm: Communication) { // : ProgramConfiguration[] {
    await this.getProgramConfigurations();
    return this.programConfigurations.filter(pc => {
      if (typeof(pc.communication) === 'number') {
        if (pc.communication === selectedComm.id) {
          pc.communication = selectedComm;
          if (typeof(pc.program) === 'number') {
            pc.program = this.findProgram(<number> pc.program);
          }
          return true;
        } else { return false; }
      } else if (pc.communication.id === selectedComm.id) {
        if (typeof(pc.program) === 'number') {
          pc.program = this.findProgram(<number> pc.program);
        }
        return true;
      }
      return false;
    });
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
      return this.programs;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async getProgramConfigurations() {
    try {
      this.programConfigurations = await this.dataApiService.getProgramConfigurations();
      return this.programConfigurations;
    } catch (error) {
      console.log('getProgramConfigurations error: ', error);
    }
  }
}
