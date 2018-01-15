import { Component, OnInit, OnChanges,
  SimpleChanges, SimpleChange,
  Input, Output, EventEmitter,
  ViewEncapsulation } from '@angular/core';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { Client } from 'app/shared/model/client';
import { ClientConfiguration } from 'app/shared/model/client-configuration';
import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-client-configurations-maintenance-panel',
  templateUrl: './client-configurations-maintenance-panel.component.html',
  styleUrls: ['./client-configurations-maintenance-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientConfigurationsMaintenancePanelComponent implements OnInit, OnChanges {

  @Input() selectedProgram: Program;
  @Input() selectedCommunication: Communication;

  clients: Client[];
  clientConfigurations: ClientConfiguration[];
  selectedClientConfigurations: ClientConfiguration[];
  programConfigurationOptions = AppConstants.PROGRAMCONFIGURATIONOPTIONS;

  constructor(
    private dataApiService: DataApiService
  ) { }

  async ngOnInit() {
    // this.communications = await this.getCommunications();
    // this.programConfigurations = await this.getProgramConfigurations();
    // this one is ugly -- when selecting a program the client configurations
    // have to be determined by first getting all the communications that are tied
    // to the program.  Yes, the Communication Configurations panel comonent does that
    // work, so really instead of passing the selected program into this component,
    // pass the communications selected based on the selected program thru the
    // communication configurations (those that are within effective/expiration dates)
    // once that comes into this component, we can filter out the client configurations
    // that apply and link the client objects
    this.clients = await this.getClients();
    this.clientConfigurations = await this.getClientConfigurations();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ClientConfigurationsMaintenancePanelComponent OnChanges', changes);
    if (changes.selectedCommunication && !changes.selectedCommunication.firstChange) {
      this.selectedClientConfigurations = this.findClientConfigurations(this.selectedCommunication);
      console.log(this.selectedClientConfigurations);
    }
  }

  private async getClients(): Promise<Client[]> {
    try {
      return await this.dataApiService.getClients();
    } catch (error) {
      console.log('getClients error: ', error);
    }
  }

  private async getClientConfigurations(): Promise<ClientConfiguration[]> {
    try {
      return await this.dataApiService.getClientConfigurations();
    } catch (error) {
      console.log('getClientConfigurations error: ', error);
    }
  }

  private findClient(id): Client {
    return this.clients.find(c => c.id === id);
  }

  // private findCommunication(id: number): Communication {
  //   return this.selectedCommunications.find(c => c.id === id);
  // }

  private findClientConfigurations(selectedCommunication: Communication): ClientConfiguration[] {
    // here find all the client configurations that point to this passed-in communication
    if (selectedCommunication === null) {
      return null;
    }

    return this.clientConfigurations.filter(cc => {
      let filterMatch = false;
      if (typeof(cc.communication) === 'number') {
        if (cc.communication === selectedCommunication.id) {
          filterMatch = true;
          cc.communication = selectedCommunication;
        }
      } else {
        filterMatch = (cc.communication.id === selectedCommunication.id);
      }
      if (filterMatch) {
        if (typeof(cc.client) === 'number') {
          cc.client = this.findClient(cc.client);
        }
        return true;
      }
    });
  }
}
