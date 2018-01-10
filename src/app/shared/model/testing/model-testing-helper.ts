// import and export all the model files to easliy include elsewhere

import { Client               } from 'app/shared/model/client';
import { ClientConfiguration  } from 'app/shared/model/client-configuration';
import { Communication        } from 'app/shared/model/communication';
import { CommunicationConfiguration
                              } from 'app/shared/model/communication-configuration';
import { Program              } from 'app/shared/model/program';
import { ProgramProfile       } from 'app/shared/model/program-profile';
import { ProgramProfileClientException
                              } from 'app/shared/model/program-profile-client-exception';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

export { Client               } from 'app/shared/model/client';
export { ClientConfiguration  } from 'app/shared/model/client-configuration';
export { Communication        } from 'app/shared/model/communication';
export { CommunicationConfiguration
                              } from 'app/shared/model/communication-configuration';
export { Program              } from 'app/shared/model/program';
export { ProgramProfileClientException
                              } from 'app/shared/model/program-profile-client-exception';
export { ProgramProfile       } from 'app/shared/model/program-profile';
export { ProgramConfiguration } from 'app/shared/model/program-configuration';

export const TEST_CLIENT        = new Client(142, 'AMD', 'AT&T INC.');
export const TEST_COMMUNICATION = new Communication(261, 'Order Received');
export const TEST_PROGRAM       = new Program(1, 'Prescription Alerts');

export class ModelTestingHelper {
  // maybe a factory to produce mock objects for testing
  public getTestClient(): Client {
    return new Client(142, 'AMD', 'AT&T INC.');
  }

  public getTestCommunication(): Communication {
    return new Communication(261, 'Order Received');
  }

  public getTestProgram(): Program {
    return new Program(1, 'Prescription Alerts');
  }

  public getTestProgramProfile(): ProgramProfile {
    const programProfile = new ProgramProfile(1);

    programProfile.id = 1;
    programProfile.defaultOptIn = 'Y';
    programProfile.visibleInUi = 'Y';
    programProfile.chanEmail = 'Y';
    programProfile.chanIvr = 'Y';
    programProfile.chanSms = 'Y';
    programProfile.chanSecure = 'Y';
    programProfile.chanMail = 'N';
    programProfile.chanMobile = 'N';
    programProfile.effective = '2017-01-01';
    programProfile.expiration = '9999-12-31';
    programProfile.program = 1;

    return programProfile;
  }

  public getTestProgramProfileClientException(): ProgramProfileClientException {
    const programProfileClientException = new ProgramProfileClientException(1, 142);

    programProfileClientException.id = 1;
    programProfileClientException.defaultOptIn = 'Y';
    programProfileClientException.visibleInUi = 'Y';
    programProfileClientException.chanEmail = 'Y';
    programProfileClientException.chanIvr = 'Y';
    programProfileClientException.chanSms = 'Y';
    programProfileClientException.chanSecure = 'Y';
    programProfileClientException.chanMail = 'N';
    programProfileClientException.chanMobile = 'N';
    programProfileClientException.effective = '2017-01-01';
    programProfileClientException.expiration = '9999-12-31';
    programProfileClientException.program = 1;

    return programProfileClientException;
  }

  public getTestClientConfiguration(): ClientConfiguration {
    const clientConfig: ClientConfiguration  = new ClientConfiguration();

    clientConfig.id = 1;
    clientConfig.name = 'Prescription Alerts Order Status',
    clientConfig.description = 'Order Status Client-level Configuration',
    clientConfig.chanEmailPriority = 2,
    clientConfig.chanIvrPriority = 3,
    clientConfig.chanSmsPriority = 1,
    clientConfig.chanMailPriority = 0,
    clientConfig.chanMobilePriority = 0,
    clientConfig.chanDefault = 'Email',
    clientConfig.required = 'Y',
    clientConfig.mandatory = 'Y',
    clientConfig.effective = '2017-01-01',
    clientConfig.expiration = '9999-12-31',
    clientConfig.client = this.getTestClient();
    clientConfig.communication = this.getTestCommunication();

    return clientConfig;
  }

  public getTestProgramConfiguration(): ProgramConfiguration {
    const programConfig: ProgramConfiguration  = new ProgramConfiguration();

    programConfig.id = 1,
    programConfig.name = 'Prescription Alerts Order Status',
    programConfig.description = 'Order Status Program-level Configuration',
    programConfig.chanEmailPriority = 2,
    programConfig.chanIvrPriority = 3,
    programConfig.chanSmsPriority = 1,
    programConfig.chanMailPriority = 0,
    programConfig.chanMobilePriority = 0,
    programConfig.chanDefault = 'Email',
    programConfig.required = 'Y',
    programConfig.mandatory = 'Y',
    programConfig.effective = '2017-01-01',
    programConfig.expiration = '9999-12-31',
    programConfig.program = this.getTestProgram();
    programConfig.communication = this.getTestCommunication();

    return programConfig;
  }
}
