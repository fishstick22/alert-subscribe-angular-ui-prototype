import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Client } from 'app/shared/model/client';
import { ClientConfiguration } from 'app/shared/model/client-configuration';
import { Communication } from 'app/shared/model/communication';

@Component({
  selector: 'app-client-configs-by-comm-modal',
  templateUrl: './client-configs-by-comm-modal.component.html',
  styleUrls: ['./client-configs-by-comm-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientConfigsByCommModalComponent implements OnInit {

  @Input() communication: Communication;
  @Input() clients: Client[];
  @Input() clientConfigurations: ClientConfiguration[];

  public SAVESUCCESS: string = 'Close on succesful save';

  displayClient: Client[];
  displayClientStartEmpty: boolean;
  supressClient: number[];

  newClientConfig: ClientConfiguration;
  prevClientConfig: ClientConfiguration;
  newClientConfigs: ClientConfiguration[];

  lastClientConfigRow: number;
  configureState: 'start' | 'pick' | 'continue' | 'configure' | 'save';

  clientDropEnabled: boolean = false;

  selectedRow: number;

  today = new Date();
  tomorrow = new Date();

  constructor(
    private configureClientModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  modalInit() {
    console.log('ClientConfigsByCommModalComponent init: ');
    console.log(this.communication);
    // console.log(this.clientConfigurations);
    // get the list of clients to populate the dropdown (covered in @Input() clients: Client[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    this.displayClientStartEmpty = true;
    this.displayClient = [];
    this.newClientConfigs = [];
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.configureState = 'start';

    this.supressClient = this.findExistingConfiguredClients();
  }

  private addClientConfig(client?: Client) {

    if (this.newClientConfig && this.configureState === 'pick') {
      this.newClientConfig.client = client;
      // this.newClientConfigs[this.newClientConfigs.length] = this.newClientConfig;
      this.supressClient.push(client.id);
      // this.configureState = 'continue';
      // this.newClientConfig = null;
      this.clientDropEnabled = false;
    }

    if (this.configureState === 'start' || this.configureState === 'continue') {
      // first time through
      this.lastClientConfigRow = this.clientConfigurations.length;
      if (this.lastClientConfigRow === 0) {
        this.newClientConfig = new ClientConfiguration();
        this.newClientConfig.effective =  // TODO shared util method
            this.tomorrow.getFullYear() + '-' +
          (this.tomorrow.getMonth() + 1) + '-' +
            this.tomorrow.getDate();
      } else {
        // clone setting from previous config row
        this.prevClientConfig = this.clientConfigurations[this.lastClientConfigRow - 1];
        this.newClientConfig = new ClientConfiguration(this.prevClientConfig);
        this.newClientConfig.effective = this.prevClientConfig.effective;
      }
      this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
      this.newClientConfigs[this.newClientConfigs.length] = this.newClientConfig;
      this.newClientConfig.expiration = '9999-12-31';
      this.newClientConfig.communication = this.communication;

      this.newClientConfig.client = new Client();

      this.configureState = 'pick';
      this.clientDropEnabled = true;
    } else {
      if (this.newClientConfig && this.configureState === 'pick') {
        this.configureState = 'continue';
      }
    }
  }

  private clientDrop(dragEvent) {
    console.log('ClientConfigComponent clientDrop: ', dragEvent);
    if (dragEvent.dragData && typeof(dragEvent.dragData.id) === 'number' ) {
      this.addClientConfig(this.findClient(dragEvent.dragData.id));
    }
  }

  private findClient(id): Client {
    return this.clients.find(c => c.id === id);
  }

  private findExistingConfiguredClients(): number[] {
    const existing: number[] = [];
    for (let i = 0; i < this.clientConfigurations.length; i++) {
      existing.push(this.clientConfigurations[i].client.id);
    }
    return existing;
  }

  private saveClientConfiguration() {
    console.log('ClientConfigComponent save');
    console.log(this.newClientConfig, ' communication id: ', this.communication);

    const modalResult: ClientConfigModalResult = {
      newClientConfigs: this.newClientConfigs
    };

    this.configureClientModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
  }

  private updateDateValue(newDateValue, cc: ClientConfiguration, dateType: string) {
    console.log('ClientConfigComponent updateDateValue: ', newDateValue, cc, dateType);
    if (dateType === 'effective') {
      cc.effective = newDateValue;
    }
    if (dateType === 'expiration') {
      cc.expiration = newDateValue;
    }
  }
}

export class ClientConfigModalResult {
  newClientConfigs: ClientConfiguration[];
}
