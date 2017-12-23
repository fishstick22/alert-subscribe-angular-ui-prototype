import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

import { ProgramConfigurationsModalComponent,
         ProgramConfigModalResult } from './program-configurations-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';
import { ModalStaticHelper, ModalResult } from 'app/shared/classes/modal-helpers';

export { ProgramConfigModalResult } from './program-configurations-modal.component';

@Injectable()
export class ProgramConfigurationsModalService {

  communications: Communication[];
  // program: Program;
  // programs: Program[];
  programConfigurations: ProgramConfiguration[];

  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  public async configureProgram(program: Program): Promise<ModalResult> {
    const modalResult = new ModalResult();

    const promise = new Promise<ModalResult>((resolve, reject) => {
      this.configureProgramModal(program)
      .then( async (result) => { // hmm, mixed syntax
        if (result.resultTxt === AppConstants.SAVESUCCESS) {
          try {
            // if (program && program.status) {
            //   program.detectChanges = 'saving';
            //   program.status.update(program);
            // }
            modalResult.modalOutput = await this.fulfillProgramConfiguration(result);
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

  private async fulfillProgramConfiguration(result): Promise<ProgramConfigModalResult> {
    const modalResult: ProgramConfigModalResult = result.modalResult;

    if (modalResult.newProgramConfigs) {
      for (let i = 0; i < modalResult.newProgramConfigs.length; i++) {
        await this.addProgramConfiguration(modalResult.newProgramConfigs[i]);
      }
    } else {
      // TODO this would be some kind of exception
      console.log('ProgramConfigurationsModalService fulfillProgramConfiguration bad result: ', result.modalResult);
    }

    return modalResult;
  }

  private async addProgramConfiguration(programConfiguration: ProgramConfiguration): Promise<void> {
    try {
      await this.dataApiService.createProgramConfiguration(programConfiguration);
    } catch (error) {
      console.log('addProgramConfiguration error: ', error);
    }
  }

  private async configureProgramModal(program: Program) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramConfigurationsModalComponent, modalOpts);
    const modalComp: ProgramConfigurationsModalComponent  = modalRef.componentInstance;

    this.communications = await this.getCommunications();
    this.programConfigurations = await this.getProgramConfigurations();

    modalComp.communications = this.communications;
    modalComp.program = program;
    modalComp.programConfigurations = await this.findProgramConfigurations(program);

    // OnInit has likely fired previously, invoke some initialization code
    modalComp.modalInit();

    return modalRef.result;
  }

  private async getCommunications(): Promise<Communication[]> {
    try {
      return await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  private async findProgramConfigurations(selectedProgram: Program): Promise<ProgramConfiguration[]> {

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

  private async getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    try {
       return await this.dataApiService.getProgramConfigurations();
    } catch (error) {
      console.log('getProgramConfigurations error: ', error);
    }
  }

  private findCommunication(id: number): Communication {
    return this.communications.find(c => c.id === id);
  }



  // async configureProgramModalOld(program: Program) {
  //   const modalOpts: NgbModalOptions = {
  //     size: 'lg'
  //   };
  //   const modalRef = this.modalService.open(ProgramConfigurationsModalComponent, modalOpts);
  //   const modalComp: ProgramConfigurationsModalComponent  = modalRef.componentInstance;

  //   modalComp.communications = await this.getCommunications();
  //   modalComp.program = program;
  //   modalComp.programConfigurations = await this.findProgramConfigurations(program);
  //   modalComp.modalInit();

  //   modalRef.result.then((result) => {
  //     if (result.resultTxt === AppConstants.SAVESUCCESS) {
  //       console.log('configureProgramModal result: ', result.modalResult);
  //       this.closeResult = `Closed with: ${result.resultTxt}`;
  //       if (result.modalResult) {
  //         const modalResult: ProgramConfigModalResult = result.modalResult;
  //         // if (modalResult.prevProgConfig) {
  //         //   this.updateProgramConfiguration(modalResult.prevProgConfig);
  //         // }
  //         if (modalResult.newProgramConfigs) {
  //           for (let i = 0; i < modalResult.newProgramConfigs.length; i++) {
  //             this.addProgramConfiguration(modalResult.newProgramConfigs[i]);
  //           }
  //         }
  //       } else {
  //         // this would be some kind of exception
  //         console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
  //       }
  //     } else {
  //       this.closeResult = `Closed with: ${result}`;
  //     }
  //     // this.setClickedRow(null);
  //     console.log('configureProgramModal result: ', this.closeResult);
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     // this.setClickedRow(null);
  //     console.log('configureProgramModal result: ', this.closeResult);
  //   });
  // }


}
