import { Injectable } from '@angular/core';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration,
         ProgramProfile,
         ProgramProfileClientException } from 'app/shared/model/testing/model-testing-helper';

import { FakeClientsService,
         ClientsService               } from './fake-clients.service';
import { FakeClientConfigurationsService,
         ClientConfigurationsService  } from './fake-client-configurations.service';
import { FakeCommunicationsService,
         CommunicationsService        } from './fake-communications.service';
import { FakeProgramsService,
         ProgramsService              } from './fake-programs.service';
import { FakeProgramConfigurationsService,
         ProgramConfigurationsService } from './fake-program-configurations.service';
import { FakeProgramProfilesService,
         ProgramProfilesService       } from './fake-program-profiles.service';

import { FakeProgramProfileClientExceptionsService,
          ProgramProfileClientExceptionsService
                                      } from './fake-program-profile-client-exceptions.service';

import { DataApiService               } from 'app/shared/services/data-api.service';

// re-export for tester convenience
export * from './fake-communications.service';
export * from './fake-programs.service';
export * from './fake-program-profiles.service';
export * from './fake-program-configurations.service';
export * from './fake-clients.service';
export * from './fake-client-configurations.service';
export * from './fake-program-profile-client-exceptions.service';

export { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class FakeDataApiService extends DataApiService {

  communications: Communication[];
  // private communicationService = new FakeCommunicationsService();
  config: IAppConfig;

  constructor(config: IAppConfig,
    communicationsService: FakeCommunicationsService,
    clientsService: ClientsService,
    clientConfigurationsService: ClientConfigurationsService,
    programsService: FakeProgramsService,
    programProfilesService: FakeProgramProfilesService,
    programConfigurationsService: FakeProgramConfigurationsService,
    programProfileClientExceptionsService: FakeProgramProfileClientExceptionsService
  ) {
    super(config,
      communicationsService,
      clientsService,
      clientConfigurationsService,
      programsService,
      programProfilesService,
      programConfigurationsService,
      programProfileClientExceptionsService
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
