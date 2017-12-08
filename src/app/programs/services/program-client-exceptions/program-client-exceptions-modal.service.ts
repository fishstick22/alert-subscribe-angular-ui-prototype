import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Program, ProgramStatus } from 'app/shared/model/program';
import { ProgramProfileClientException } from 'app/shared/model/program-profile-client-exception';

import { ProgramClientExceptionsModalComponent,
         ProgramClientExceptionsResult } from './program-client-exceptions-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ProgramClientExceptionsModalService {

  program: Program;
  programProfileClientExceptions: ProgramProfileClientException[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async configureProgramClientExcModal(program: Program) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramClientExceptionsModalComponent, modalOpts);
    const modalComp: ProgramClientExceptionsModalComponent  = modalRef.componentInstance;

    modalComp.program = program;
    modalComp.programClientExceptions = await this.findClientExceptions(program);

    modalComp.modalInit();

    modalRef.result.then( async (result) => {
      if (result.resultTxt === AppConstants.SAVESUCCESS) {

      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // this.setClickedRow(null);
      console.log('configureProgramModal result: ', this.closeResult);
      return this.closeResult;
    });
  }

  async findClientExceptions(program: Program) {
    // TODO well, here's where we want to go get one at a time or
    // a query that gets them by program id in the API...
    await this.getProgramProfileClientExceptions();
    return this.programProfileClientExceptions.filter(ppce => ppce.program === program.id);
  }

  async getProgramProfileClientExceptions() {
    try {
      this.programProfileClientExceptions = await this.dataApiService.getProgramProfileClientExceptions();
      // return this.programProfileClientExceptions;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  // TODO high time to move this and all its duplicates to static helper
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
