import { Injectable }                  from '@angular/core';

export {FakeCommunicationsService,
    Communication, CommunicationsService } from './fake-communications.service';
export { FakeProgramsService,
    Program, ProgramsService } from './fake-programs.service';
export { FakeProgramConfigurationsService,
    ProgramConfiguration, ProgramConfigurationsService } from './fake-program-configurations.service';
export { FakeClientsService,
  Client, ClientsService } from './fake-clients.service';
export { FakeClientConfigurationsService,
    ClientConfiguration, ClientConfigurationsService } from './fake-client-configurations.service';

export { DataApiService } from 'app/shared/services/data-api.service';

import { FakeCommunicationsService,
    Communication, CommunicationsService } from './fake-communications.service';
import { FakeProgramsService,
    Program, ProgramsService } from './fake-programs.service';
import { FakeProgramConfigurationsService,
        ProgramConfiguration, ProgramConfigurationsService } from './fake-program-configurations.service';
import { DataApiService } from 'app/shared/services/data-api.service';
import { FakeClientsService,
  Client, ClientsService } from './fake-clients.service';
import { FakeClientConfigurationsService,
    ClientConfiguration, ClientConfigurationsService } from './fake-client-configurations.service';

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
  ) { super(communicationsService, clientsService, clientConfigurationsService, programsService, programConfigurationsService); }



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
