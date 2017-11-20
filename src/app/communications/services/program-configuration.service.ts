import { Injectable } from '@angular/core';

import { NgbModal, ModalDismissReasons,
  NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ProgramConfigurationService {

  programs: Program[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  configureProgramModal(commId) {
    // const modalOpts: NgbModalOptions = {
    //   size: 'lg'
    // };
    // const modalRef = this.modalService.open(ProgramConfigByCommComponent, modalOpts);
    // const modalComp: ProgramConfigByCommComponent  = modalRef.componentInstance;

    // // modalComp.name = 'Configure Program';
    // modalComp.communication = this.findCommunication(commId);
    // modalComp.programs = this.programs;
    // modalComp.programConfigurations = this.findProgramConfigurations(commId);

    // modalRef.result.then((result) => {
    //   if (result.resultTxt === modalComp.SAVESUCCESS) {
    //     console.log('configureProgramModal result: ', result.modalResult);
    //     this.closeResult = `Closed with: ${result.resultTxt}`;
    //     if (result.modalResult) {
    //       const modalResult: ProgramConfigModalResult = result.modalResult;
    //       if (modalResult.prevProgConfig) {
    //         this.updateProgramConfiguration(modalResult.prevProgConfig);
    //       }
    //       if (modalResult.newProgConfig) {
    //         this.addProgramConfiguration(modalResult.newProgConfig);
    //       }
    //     } else {
    //       // this would be some kind of exception
    //       console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
    //     }
    //   } else {
    //     this.closeResult = `Closed with: ${result}`;
    //   }
    //   this.setClickedRow(null);
    //   console.log('configureProgram result: ', this.closeResult);
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   this.setClickedRow(null);
    //   console.log('addNewProgramConfig result: ', this.closeResult);
    // });
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

}
