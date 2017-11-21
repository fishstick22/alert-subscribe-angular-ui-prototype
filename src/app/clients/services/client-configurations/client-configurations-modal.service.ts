import { Injectable } from '@angular/core';

import { NgbModal,
  ModalDismissReasons,
  NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Communication } from 'app/shared/model/communication';
import { Client } from 'app/shared/model/client';
import { ClientConfiguration } from 'app/shared/model/client-configuration';

import { ClientConfigurationsModalComponent,
   ClientConfigModalResult } from './client-configurations-modal.component';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class ClientConfigurationsModalService {

  communications: Communication[];
  client: Client;
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
  async configureClientModal(client: Client) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ClientConfigurationsModalComponent, modalOpts);
    const modalComp: ClientConfigurationsModalComponent  = modalRef.componentInstance;

    modalComp.communications = await this.getCommunications();
    modalComp.client = client;
    modalComp.clientConfigurations = await this.findClientConfigurations(client);
    modalComp.modalInit();

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureClientModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ClientConfigModalResult = result.modalResult;
          // if (modalResult.prevProgConfig) {
          //   this.updateClientConfiguration(modalResult.prevProgConfig);
          // }
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

  private findCommunication(id: number): Communication {
    return this.communications.find(c => c.id === id);
  }

  private async findClientConfigurations(selectedClient: Client) { // : ClientConfiguration[] {
    await this.getClientConfigurations();
    return this.clientConfigurations.filter(pc => {
      if (typeof(pc.client) === 'number') {
        if (pc.client === selectedClient.id) {
          pc.client = selectedClient;
          if (typeof(pc.communication) === 'number') {
            pc.communication = this.findCommunication(<number>pc.communication);
          }
          return true;
        } else { return false; }
      } else if (pc.client.id === selectedClient.id) {
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
}
