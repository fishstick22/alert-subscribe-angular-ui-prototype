import { Injectable } from '@angular/core';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { FakeCommunicationsService,
         CommunicationsService } from './fake-communications.service';
import { FakeProgramsService,
         ProgramsService } from './fake-programs.service';
import { FakeProgramConfigurationsService,
         ProgramConfigurationsService } from './fake-program-configurations.service';
import { FakeClientsService,
         ClientsService } from './fake-clients.service';
import { FakeClientConfigurationsService,
         ClientConfigurationsService } from './fake-client-configurations.service';
import { DataApiService } from 'app/shared/services/data-api.service';

// re-export for tester convenience
export * from './fake-communications.service';
export * from './fake-programs.service';
export * from './fake-program-configurations.service';
export * from './fake-clients.service';
export * from './fake-client-configurations.service';

export { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class FakeDataApiService extends DataApiService {

  communications: Communication[];
  // private communicationService = new FakeCommunicationsService();

  constructor(
    communicationsService: FakeCommunicationsService,
    clientsService: ClientsService,
    clientConfigurationsService: ClientConfigurationsService,
    programsService: FakeProgramsService,
    programConfigurationsService: FakeProgramConfigurationsService
  ) {
    super(
      communicationsService,
      clientsService,
      clientConfigurationsService,
      programsService,
      programConfigurationsService
    );
  }

  public async getCommunications(): Promise<Communication[]> {
    if (this.communications) {
      return this.communications;
    } else {
      this.communications = await this.communicationsService.getCommunicationsThruApi();
      return this.communications;
      // return this.removeProgramConfigurationCruft(this.communications);
    }
  }

  public async getPrograms(): Promise<Program[]> {
    if (this.programs) {
      return this.programs;
    } else {
      this.programs = await this.programsService.getProgramsThruApi();
      return this.programs;
      // return this.removeProgramConfigurationCruft(this.programs);
    }
  }

  public async getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    if (this.programConfigurations) {
      return this.programConfigurations;
    } else {
      this.programConfigurations = await this.programConfigurationService.getProgramConfigurationsThruApi();
      return this.programConfigurations;
    }
  }
}
