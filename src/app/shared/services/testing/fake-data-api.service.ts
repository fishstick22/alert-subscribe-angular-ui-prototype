import { Injectable }                  from '@angular/core';

export {FakeCommunicationsService,
    Communication, CommunicationService } from './fake-communications.service';
export { DataApiService } from 'app/shared/services/data-api.service';

import { FakeCommunicationsService,
    Communication, CommunicationService } from './fake-communications.service';
import { DataApiService } from 'app/shared/services/data-api.service';

@Injectable()
export class FakeDataApiService extends DataApiService {

    communications: Communication[];
    // private communicationService = new FakeCommunicationsService();

    constructor(
        communicationService: FakeCommunicationsService,
        // private clientService: ClientService,
        // private clientConfigurationService: ClientConfigurationService,
        // private programService: ProgramService,
        // private programConfigurationService: ProgramConfigurationService
      ) { super(communicationService); }



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
