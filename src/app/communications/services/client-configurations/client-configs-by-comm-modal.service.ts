import { Injectable } from '@angular/core';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Communication } from 'app/shared/model/communication';
import { Client } from 'app/shared/model/client';
import { ClientConfiguration } from 'app/shared/model/client-configuration';

import { ClientConfigsByCommModalComponent,
         ClientConfigModalResult } from './client-configs-by-comm-modal.component';

import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ClientConfigsByCommModalService {

  clients: Client[];
  clientConfigurations: ClientConfiguration[];
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  private addClientConfiguration(clientConfiguration: ClientConfiguration): void {
    this.dataApiService.createClientConfiguration(clientConfiguration)
      .then(pc => console.log('addClientConfiguration:', clientConfiguration, this.clientConfigurations))
      .catch(error =>  console.log('addClientConfiguration error: ', error));
  }

  async configureClientModal(communication: Communication) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ClientConfigsByCommModalComponent, modalOpts);
    const modalComp: ClientConfigsByCommModalComponent  = modalRef.componentInstance;

    modalComp.communication = communication;
    modalComp.clients = await this.getClients();
    modalComp.clientConfigurations = await this.findClientConfigurations(communication);
    modalComp.modalInit();

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureClientModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ClientConfigModalResult = result.modalResult;

          if (modalResult.newClientConfigs) {
            for (let i = 0; i < modalResult.newClientConfigs.length; i++) {
              this.addClientConfiguration(modalResult.newClientConfigs[i]);
            }
          }
        } else {
          // this would be some kind of exception
          console.log('CommunicationComponent configureClientModal bad result: ', result.modalResult);
        }
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      // this.setClickedRow(null);
      console.log('configureClientModal result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // this.setClickedRow(null);
      console.log('configureClientModal result: ', this.closeResult);
    });
  }

  private findClient(id): Client {
    return this.clients.find(c => c.id === id);
  }

  private async findClientConfigurations(selectedComm: Communication) { // : ClientConfiguration[] {
    await this.getClientConfigurations();
    return this.clientConfigurations.filter(cc => {
      if (typeof(cc.communication) === 'number') {
        if (cc.communication === selectedComm.id) {
          cc.communication = selectedComm;
          if (typeof(cc.client) === 'number') {
            cc.client = this.findClient(<number> cc.client);
          }
          return true;
        } else { return false; }
      } else if (cc.communication.id === selectedComm.id) {
        if (typeof(cc.client) === 'number') {
          cc.client = this.findClient(<number> cc.client);
        }
        return true;
      }
    });
  }
  async getClients() {
    try {
      this.clients = await this.dataApiService.getClients();
      return this.clients;
    } catch (error) {
      console.log('getClients error: ', error);
    }
  }

  async getClientConfigurations() {
    try {
      this.clientConfigurations = await this.dataApiService.getClientConfigurations();
      return this.clientConfigurations;
    } catch (error) {
      console.log('getClientConfigurations error: ', error);
    }
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
