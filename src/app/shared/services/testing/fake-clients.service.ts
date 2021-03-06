import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { ClientsService } from 'app/shared/services/clients/clients.service';

// re-export for tester convenience
// export { Client } from 'app/shared/model/client';
export { ClientsService } from 'app/shared/services/clients/clients.service';


const helper = new ModelTestingHelper();
const client = helper.getTestClient();
export const CLIENTS: Client[] = [client];

@Injectable()
export class FakeClientsService extends ClientsService {

  clients = CLIENTS.map(c => c.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  constructor(@Inject(APP_CONFIG) config: IAppConfig, http: HttpClient) {
    super(config, http);
  }

  async getClientsThruApi(): Promise<Client[]> {
    try {
      return this.lastPromise = Promise.resolve<Client[]>(this.clients);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
