import { Injectable } from '@angular/core';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration,
         ProgramProfile } from 'app/shared/model/testing/model-testing-helper';

import { ProgramProfilesService } from 'app/shared/services/program-profiles/program-profiles.service';

// re-export for tester convenience
export { ProgramProfilesService } from 'app/shared/services/program-profiles/program-profiles.service';

const helper = new ModelTestingHelper();
// const client = helper.getTestClient();
// const communication = helper.getTestCommunication();
const programProfile: ProgramProfile  = helper.getTestProgramProfile();
export const PROGPROFILES: ProgramProfile[] = [programProfile];

@Injectable()
export class FakeProgramProfilesService extends ProgramProfilesService {

  programProfiles = PROGPROFILES.map(pp => pp.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getProgramProfilesThruApi(): Promise<ProgramProfile[]> {
    try {
      return this.lastPromise = Promise.resolve<ProgramProfile[]>(this.programProfiles);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

