import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

import { ProgramConfigurationsModalComponent,
          ProgramConfigModalResult } from './program-configurations-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ProgramConfigurationsModalService {

  communications: Communication[];
  program: Program;
  programs: Program[];
  programConfigurations: ProgramConfiguration[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  private addProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.dataApiService.createProgramConfiguration(programConfiguration)
      .then(pc => console.log('addProgramConfiguration:', programConfiguration, this.programConfigurations))
      .catch(error =>  console.log('addProgramConfiguration error: ', error));
  }

  async configureProgramModal(program: Program) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramConfigurationsModalComponent, modalOpts);
    const modalComp: ProgramConfigurationsModalComponent  = modalRef.componentInstance;

    modalComp.communications = await this.getCommunications();
    modalComp.program = program;
    modalComp.programConfigurations = await this.findProgramConfigurations(program);
    modalComp.modalInit();

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureProgramModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ProgramConfigModalResult = result.modalResult;
          // if (modalResult.prevProgConfig) {
          //   this.updateProgramConfiguration(modalResult.prevProgConfig);
          // }
          if (modalResult.newProgramConfigs) {
            for (let i = 0; i < modalResult.newProgramConfigs.length; i++) {
              this.addProgramConfiguration(modalResult.newProgramConfigs[i]);
            }
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

  private findCommunication(id: number): Communication {
    return this.communications.find(c => c.id === id);
  }

  private async findProgramConfigurations(selectedProgram: Program) { // : ProgramConfiguration[] {
    await this.getProgramConfigurations();
    return this.programConfigurations.filter(pc => {
      if (typeof(pc.program) === 'number') {
        if (pc.program === selectedProgram.id) {
          pc.program = selectedProgram;
          if (typeof(pc.communication) === 'number') {
            pc.communication = this.findCommunication(<number>pc.communication);
          }
          return true;
        } else { return false; }
      } else if (pc.program.id === selectedProgram.id) {
        if (typeof(pc.communication) === 'number') {
          pc.communication = this.findCommunication(<number>pc.communication);
        }
        return true;
      }
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

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
      return this.communications;
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
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
