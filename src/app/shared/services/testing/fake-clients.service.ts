// re-export for tester convenience
export { Client } from 'app/shared/model/client';
export { ClientsService } from 'app/shared/services/clients/clients.service';

import { Client } from 'app/shared/model/client';
import { ClientsService } from 'app/shared/services/clients/clients.service';

export const PROGS: Client[] = [
  new Client(1, 'Prescription Alerts')
//   {'id': 1, 'name': 'Prescription Alerts',     'description': 'PBM Communications including Order Status and Refill Reminder alerts'},
];

export class FakeClientsService extends ClientsService {

  clients = PROGS.map(p => p.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getClientsThruApi(): Promise<Client[]> {
    try {
      // const response = await this.http.get(this.commApiEndpoint).toPromise();
      // return response.json() as Client[];
      // return response as Client[];
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
