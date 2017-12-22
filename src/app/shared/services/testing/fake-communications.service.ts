import { Injectable } from '@angular/core';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { CommunicationsService } from 'app/shared/services/communications/communications.service';

// re-export for tester convenience
// export { Communication } from 'app/shared/model/communication';
export { CommunicationsService } from 'app/shared/services/communications/communications.service';

const helper = new ModelTestingHelper();
const communication = helper.getTestCommunication();
export const COMMS: Communication[] = [communication];

@Injectable()
export class FakeCommunicationsService extends CommunicationsService {

  communications = COMMS.map(c => c.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getCommunicationsThruApi(): Promise<Communication[]> {
    try {
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
