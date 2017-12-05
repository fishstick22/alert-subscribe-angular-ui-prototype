import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Client } from 'app/shared/model/client';
import { ClientConfiguration } from 'app/shared/model/client-configuration';

export class ClientConfigModalResult {
  newClientConfigs: ClientConfiguration[];
}

@Component({
  selector: 'app-client-configurations-modal',
  templateUrl: './client-configurations-modal.component.html',
  styleUrls: ['./client-configurations-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientConfigurationsModalComponent implements OnInit {

  @Input() communications: Communication[];
  @Input() client: Client = new Client(); // just becasue service inits whenever
  @Input() clientConfigurations: ClientConfiguration[] = [] ;

  displayComm: Communication[];
  displayCommStartEmpty: boolean;
  supressComm: number[];

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
    console.log('ClientConfigComponent init: ');
    console.log(this.client);
    // get the list of clients to populate the dropdown (covered in @Input() clients: Client[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    this.displayCommStartEmpty = true;
    this.displayComm = [];
    this.newClientConfigs = [];
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.configureState = 'start';

    this.supressComm = this.findExistingConfiguredComms();
  }

  private addClientConfig(communication?: Communication) {

    if (this.newClientConfig && this.configureState === 'pick') {
      this.newClientConfig.communication = communication;
      this.supressComm.push(communication.id);
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
      this.newClientConfig.expiration = AppConstants.UNEXPIRED;
      this.newClientConfig.client = this.client;

      this.newClientConfig.communication = new Communication();

      this.configureState = 'pick';
      this.clientDropEnabled = true;
    } else {
      if (this.newClientConfig && this.configureState === 'pick') {
        this.configureState = 'continue';
      }
    }
  }

  private communicationDrop(dragEvent) {
    console.log('ClientConfigComponent communicationDrop: ', dragEvent);
    if (dragEvent.dragData && typeof(dragEvent.dragData.id) === 'number' ) {
      this.addClientConfig(this.findCommunication(dragEvent.dragData.id));
    }
  }

  private findCommunication(id): Communication {
    return this.communications.find(c => c.id === id);
  }

  private findExistingConfiguredComms(): number[] {
    const existing: number[] = [];
    for (let i = 0; i < this.clientConfigurations.length; i++) {
      existing.push(this.clientConfigurations[i].communication.id);
    }
    return existing;
  }

  private saveClientConfiguration() {
    console.log('ClientConfigComponent save');
    console.log(this.newClientConfig, ' client id: ', this.client);

    const modalResult: ClientConfigModalResult = {
      newClientConfigs: this.newClientConfigs
    };

    this.configureClientModal.close({resultTxt: AppConstants.SAVESUCCESS, modalResult: modalResult});
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
