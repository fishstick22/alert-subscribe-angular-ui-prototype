import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Communication, CommunicationConfigAction } from 'app/shared/model/communication';
import { DataApiService } from 'app/shared/services/data-api.service';

import { ProgramConfigurationService } from './services/program-configuration.service';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommunicationsComponent implements OnInit {

  communications: Communication[];
  // programs: Program[];
  // programConfigurations: ProgramConfiguration[];
  // clients: Client[];
  // clientConfigurations: ClientConfiguration[];
  displayComm: Communication[];
  displayCommStartEmpty: boolean;

  selectedRow: number;

  constructor(
    private dataApiService: DataApiService,
    private programConfigurationService: ProgramConfigurationService
  ) { }

  async ngOnInit() {
    await this.getCommunications();

    this.displayCommStartEmpty = false;
    this.displayComm = this.communications;

    console.log('CommunicationComponent ngOnInit', this.communications);
  }

  private configureCommunication(commConfigAction: CommunicationConfigAction) {
    if (commConfigAction.configType === 'clients') {
      this.configureCommunicationForClient(commConfigAction.commId);
    }
    if (commConfigAction.configType === 'program') {
      this.configureCommunicationForProgram(commConfigAction.commId);
    }
  }

  private configureCommunicationForClient(commId) {
    // invoke service to manage a modal dialog allowing user to
    // configure the client-level communication configurations
  }
  private configureCommunicationForProgram(commId) {
    // invoke service to manage a modal dialog allowing user to
    // configure the client-level communication configurations
    this.programConfigurationService.configureProgramModal(this.findCommunication(commId));
  }

  private findCommunication(id: number): Communication {
    return this.communications.find(c => c.id === id);
  }

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }
}
