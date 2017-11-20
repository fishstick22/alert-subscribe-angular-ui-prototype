import { Injectable }                  from '@angular/core';

export {FakeCommunicationsService,
    Communication, CommunicationService } from './fake-communications.service';
export { FakeProgramsService,
    Program, ProgramService } from './fake-programs.service';
export { DataApiService } from 'app/shared/services/data-api.service';

import { FakeCommunicationsService,
    Communication, CommunicationService } from './fake-communications.service';
import { FakeProgramsService,
    Program, ProgramService } from './fake-programs.service';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class FakeDataApiService extends DataApiService {

    communications: Communication[];
    // private communicationService = new FakeCommunicationsService();

    constructor(
        communicationService: FakeCommunicationsService,
        // private clientService: ClientService,
        // private clientConfigurationService: ClientConfigurationService,
        programService: FakeProgramsService,
        // private programConfigurationService: ProgramConfigurationService
      ) { super(communicationService, programService); }



    public async getCommunications(): Promise<Communication[]> {
        if (this.communications) {
          return this.communications;
        } else {
          this.communications = await this.communicationService.getCommunicationsThruApi();
          return this.communications;
          // return this.removeProgramConfigurationCruft(this.communications);
        }
      }
}
