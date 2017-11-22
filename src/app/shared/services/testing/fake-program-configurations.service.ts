import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { ProgramConfigurationsService } from 'app/shared/services/program-configurations/program-configurations.service';

// re-export for tester convenience
// export { ProgramConfiguration } from 'app/shared/model/program-configuration';
export { ProgramConfigurationsService } from 'app/shared/services/program-configurations/program-configurations.service';

const helper = new ModelTestingHelper();
const client = helper.getTestClient();
const communication = helper.getTestCommunication();
const programConfig: ProgramConfiguration  = helper.getTestProgramConfiguration();
export const PROGCONFIGS: ProgramConfiguration[] = [programConfig];

export class FakeProgramConfigurationsService extends ProgramConfigurationsService {

  programs = PROGCONFIGS.map(pc => pc.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getProgramConfigurationsThruApi(): Promise<ProgramConfiguration[]> {
    try {
      return this.lastPromise = Promise.resolve<ProgramConfiguration[]>(this.programs);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
