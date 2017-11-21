import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { Client,
         ClientSortCriteria,
         ClientConfigAction } from 'app/shared/model/client';

import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsComponent implements OnInit {

  // communications: Communication[];
  clients: Client[];
  // clientConfigurations: ClientConfiguration[];
  displayClient: Client[];

  selectedRow: number;
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    // private modalService: NgbModal
  ) { }

  async ngOnInit() {
    console.log('ClientComponent ngOnInit...');
    // await this.getCommunications();
    await this.getClients();
    // await this.getClientConfigurations();

    // this.displayClient = this.clients;
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
      // this.configureClientModal(clientConfigAction.clientId);
    }
  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }
}
