import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { Client,
         ClientSortCriteria,
         ClientConfigAction } from 'app/shared/model/client';

import { DataApiService } from 'app/shared/services/data-api.service';

import { ClientConfigurationsModalService } from './services/client-configurations/client-configurations-modal.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  selectedRow: number;

  constructor(
    private dataApiService: DataApiService,
    private clientConfigService: ClientConfigurationsModalService
  ) { }

  async ngOnInit() {
    console.log('ClientComponent ngOnInit...');
    await this.getClients();
  }

  async getClients() {
    try {
      this.clients = await this.dataApiService.getClients();
    } catch (error) {
      console.log('getClients error: ', error);
    }
  }

  private configureClient(clientConfigAction: ClientConfigAction) {
    if (clientConfigAction.configType === 'communications') {
      this.configureClientCommunications(clientConfigAction.clientId);
    }
  }

  private configureClientCommunications(clientId) {
    // invoke service to manage a modal dialog allowing user to
    // configure the client-level communication configurations
    const client: Client = this.findClient(clientId);
    this.clientConfigService.configureClientModal(client);
  }

  private findClient(id): Client {
    return this.clients.find(c => c.id === id);
  }

  private setClickedRow(index) {
    if (this.selectedRow === index || this.selectedRow === null ) {
      this.selectedRow = null;
    } else {
      this.selectedRow = index;
    }
  }
}
