// re-export for tester convenience
export { Communication } from 'app/shared/model/communication';
export { CommunicationsService } from 'app/shared/services/communications/communications.service';

import { Communication } from 'app/shared/model/communication';
import { CommunicationsService } from 'app/shared/services/communications/communications.service';

export const COMMS: Communication[] = [
  new Communication(260, 'Refill Available Notice')
  // {'id': 260,  'name': 'Refill Available Notice',
  //       'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
  //       'programConfiguration': [],
  //       'clientConfiguration': []},
  // {'id': 261,  'name': 'Order Received',
  //       'description': 'Notifies a member when their order is received',
  //       'programConfiguration': [],
  //       'clientConfiguration': []},
  // {'id': 263,  'name': 'Refill Expiring Notice',
  //       'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
  //       'programConfiguration': [],
  //       'clientConfiguration': []},
  // {'id': 264,  'name': 'Order Shipped',
  //       'description': 'Notifies a member when their order is shipped',
  //       'programConfiguration': [],
  //       'clientConfiguration': []},
];

export class FakeCommunicationsService extends CommunicationsService {

  communications = COMMS.map(c => c.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getCommunicationsThruApi(): Promise<Communication[]> {
    try {
      // const response = await this.http.get(this.commApiEndpoint).toPromise();
      // return response.json() as Communication[];
      // return response as Communication[];
      return this.lastPromise = Promise.resolve<Communication[]>(this.communications);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
