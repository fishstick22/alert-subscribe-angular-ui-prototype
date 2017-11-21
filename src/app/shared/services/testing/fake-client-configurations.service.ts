// re-export for tester convenience
export { ClientConfiguration } from 'app/shared/model/client-configuration';
export { ClientConfigurationsService } from 'app/shared/services/client-configurations/client-configurations.service';


import { Client }              from 'app/shared/model/client';
import { Communication }        from 'app/shared/model/communication';
import { ClientConfiguration } from 'app/shared/model/client-configuration';
import { ClientConfigurationsService } from 'app/shared/services/client-configurations/client-configurations.service';

const client = new Client(142, 'AMD', 'AT&T INC.');
const communication = new Communication(261, 'Order Received');
const clientConfig: ClientConfiguration  = new ClientConfiguration();

clientConfig.id = 1,
clientConfig.name = 'Prescription Alerts Order Status',
clientConfig.description = 'Order Status Client-level Configuration',
clientConfig.chanEmailPriority = 2,
clientConfig.chanIvrPriority = 3,
clientConfig.chanSmsPriority = 1,
clientConfig.chanMailPriority = 0,
clientConfig.chanMobilePriority = 0,
clientConfig.chanMandatory = 'Email',
clientConfig.effective = '2017-1-1',
clientConfig.expiration = '9999-12-31',
clientConfig.client = client;
clientConfig.communication = communication;

export const CLIENTCONFIGS: ClientConfiguration[] = [clientConfig];

export class FakeClientConfigurationsService extends ClientConfigurationsService {

  clients = CLIENTCONFIGS.map(cc => cc.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getClientConfigurationsThruApi(): Promise<ClientConfiguration[]> {
    try {
      // const response = await this.http.get(this.commApiEndpoint).toPromise();
      // return response.json() as ClientConfiguration[];
      // return response as ClientConfiguration[];
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
