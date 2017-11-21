
import { Program }              from 'app/shared/model/program';
import { Communication }        from 'app/shared/model/communication';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';
import { ProgramConfigurationsService } from 'app/shared/services/program-configurations/program-configurations.service';

// re-export for tester convenience
export { ProgramConfiguration } from 'app/shared/model/program-configuration';
export { ProgramConfigurationsService } from 'app/shared/services/program-configurations/program-configurations.service';

const prog = new Program(1, 'Prescription Alerts');
const comm = new Communication(261, 'Order Received');
const progConfig: ProgramConfiguration  = new ProgramConfiguration();

progConfig.id = 1,
progConfig.name = 'Prescription Alerts Order Status',
progConfig.description = 'Order Status Program-level Configuration',
progConfig.chanEmailPriority = 2,
progConfig.chanIvrPriority = 3,
progConfig.chanSmsPriority = 1,
progConfig.chanMailPriority = 0,
progConfig.chanMobilePriority = 0,
progConfig.chanMandatory = 'Email',
progConfig.effective = '2017-1-1',
progConfig.expiration = '9999-12-31',
progConfig.program = new Program(1, 'Prescription Alerts');
progConfig.communication = new Communication(261, 'Order Received');

export const PROGCONFIGS: ProgramConfiguration[] = [progConfig];

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
