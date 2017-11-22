import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { ClientConfigurationsService } from 'app/shared/services/client-configurations/client-configurations.service';

// re-export for tester convenience
// export { ClientConfiguration } from 'app/shared/model/client-configuration';
export { ClientConfigurationsService } from 'app/shared/services/client-configurations/client-configurations.service';

const helper = new ModelTestingHelper();
const client = helper.getTestClient();
const communication = helper.getTestCommunication();
const clientConfig: ClientConfiguration  = helper.getTestClientConfiguration();
export const CLIENTCONFIGS: ClientConfiguration[] = [clientConfig];

export class FakeClientConfigurationsService extends ClientConfigurationsService {

  clients = CLIENTCONFIGS.map(cc => cc.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getClientConfigurationsThruApi(): Promise<ClientConfiguration[]> {
    try {
      return this.lastPromise = Promise.resolve<ClientConfiguration[]>(this.clients);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
