import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration,
         ProgramProfile,
         ProgramProfileClientException } from 'app/shared/model/testing/model-testing-helper';

import { ProgramProfileClientExceptionsService
} from 'app/shared/services/program-profile-client-exceptions/program-profile-client-exceptions.service';

// re-export for tester convenience
export { ProgramProfileClientExceptionsService
} from 'app/shared/services/program-profile-client-exceptions/program-profile-client-exceptions.service';

const helper = new ModelTestingHelper();
// const client = helper.getTestClient();
// const communication = helper.getTestCommunication();
const programProfileClientException: ProgramProfileClientException  = helper.getTestProgramProfileClientException();
export const PROGPROFILECLIENTEXCEPTS: ProgramProfileClientException[] = [programProfileClientException];

export class FakeProgramProfileClientExceptionsService extends ProgramProfileClientExceptionsService {

  programProfileClientExceptions = PROGPROFILECLIENTEXCEPTS.map(pp => pp.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getProgramProfileClientExceptionsThruApi(): Promise<ProgramProfileClientException[]> {
    try {
      return this.lastPromise = Promise.resolve<ProgramProfileClientException[]>(this.programProfileClientExceptions);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

