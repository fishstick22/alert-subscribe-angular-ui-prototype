import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Program, ProgramStatus } from 'app/shared/model/program';
import { ProgramProfileClientException } from 'app/shared/model/program-profile-client-exception';

import { ProgramClientExceptionsModalComponent,
         ProgramClientExceptionsModalResult } from './program-client-exceptions-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';
import { ModalStaticHelper, ModalResult } from 'app/shared/classes/modal-helpers';

export { ProgramClientExceptionsModalResult } from './program-client-exceptions-modal.component';

@Injectable()
export class ProgramClientExceptionsModalService {

  programProfileClientExceptions: ProgramProfileClientException[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async configureProgramClientExceptions(program: Program): Promise<ModalResult> {
    const modalResult = new ModalResult();

    const promise = new Promise<ModalResult>((resolve, reject) => {
      this.configureProgramClientExcModal(program)
      .then( async (result) => { // hmm, mixed syntax
        if (result.resultTxt === AppConstants.SAVESUCCESS) {
          try {
            // if (program && program.status) {
            //   program.detectChanges = 'saving';
            //   program.status.update(program);
            // }
            modalResult.modalOutput = await this.fulfillProgramClientExceptionConfiguration(result);
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

  private async fulfillProgramClientExceptionConfiguration(result): Promise<ProgramClientExceptionsModalResult> {
    const modalResult: ProgramClientExceptionsModalResult = result.modalResult;


    return modalResult;
  }

  private async configureProgramClientExcModal(program: Program): Promise<any> {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramClientExceptionsModalComponent, modalOpts);
    const modalComp: ProgramClientExceptionsModalComponent  = modalRef.componentInstance;

    modalComp.program = program;
    modalComp.programClientExceptions = await this.findClientExceptions(program);

    // OnInit has likely fired previously, invoke some initialization code
    modalComp.modalInit();

    return modalRef.result;
  }

  // async configureProgramClientExcModalOld(program: Program) {
  //   const modalOpts: NgbModalOptions = {
  //     size: 'lg'
  //   };
  //   const modalRef = this.modalService.open(ProgramClientExceptionsModalComponent, modalOpts);
  //   const modalComp: ProgramClientExceptionsModalComponent  = modalRef.componentInstance;

  //   modalComp.program = program;
  //   modalComp.programClientExceptions = await this.findClientExceptions(program);

  //   modalComp.modalInit();

  //   modalRef.result.then( async (result) => {
  //     if (result.resultTxt === AppConstants.SAVESUCCESS) {

  //     }
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     // this.setClickedRow(null);
  //     console.log('configureProgramModal result: ', this.closeResult);
  //     return this.closeResult;
  //   });
  // }

  private async findClientExceptions(program: Program) {
    // TODO well, here's where we want to go get one at a time or
    // a query that gets them by program id in the API...
    await this.getProgramProfileClientExceptions();
    return this.programProfileClientExceptions.filter(ppce => ppce.program === program.id);
  }

  private async getProgramProfileClientExceptions() {
    try {
      this.programProfileClientExceptions = await this.dataApiService.getProgramProfileClientExceptions();
      // return this.programProfileClientExceptions;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }
}
