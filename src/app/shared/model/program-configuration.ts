import { Program } from './program';
import { Communication } from './communication';
import { CommunicationConfiguration } from './communication-configuration';

export class ProgramConfiguration implements CommunicationConfiguration {

  id: number;
  name: string;
  description: string;
  chanEmailPriority: number;
  chanIvrPriority: number;
  chanSmsPriority: number;
  chanMailPriority: number;
  chanMobilePriority: number;
  chanDefault: 'No' | 'Email' | 'IVR' | 'SMS';
  required: boolean;
  mandatory: boolean;
  effective: string;
  expiration: string;
  program: Program;
  communication: Communication;

  // https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript
  constructor(programConfig?: ProgramConfiguration) {

    if (programConfig) {
      this.chanEmailPriority  = programConfig.chanEmailPriority;
      this.name               = programConfig.name;
      this.chanIvrPriority    = programConfig.chanIvrPriority;
      this.chanSmsPriority    = programConfig.chanSmsPriority;
      this.chanMailPriority   = programConfig.chanMailPriority;
      this.chanMobilePriority = programConfig.chanMobilePriority;
      this.chanDefault        = programConfig.chanDefault;
      this.required           = programConfig.required;
      this.mandatory          = programConfig.mandatory;
    } else {
      this.chanEmailPriority  = 0;
      this.chanIvrPriority    = 0;
      this.chanSmsPriority    = 0;
      this.chanMailPriority   = 0;
      this.chanMobilePriority = 0;
      this.chanDefault        = 'No';
      this.required           = false;
      this.mandatory          = false;
    }
  }

  clone() {
    return new ProgramConfiguration(this);
  }
}
