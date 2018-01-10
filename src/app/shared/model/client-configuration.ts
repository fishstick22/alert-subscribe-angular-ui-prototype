import { Client } from './client';
import { Communication } from './communication';
import { CommunicationConfiguration } from './communication-configuration';

export class ClientConfiguration implements CommunicationConfiguration {
  id: number;
  name: string;
  description: string;
  chanEmailPriority: number;
  chanIvrPriority: number;
  chanSmsPriority: number;
  chanSecurePriority: number;
  chanMailPriority: number;
  chanMobilePriority: number;
  chanDefault: 'No' | 'Email' | 'IVR' | 'SMS';
  required: 'Y' | 'N';
  mandatory: 'Y' | 'N';
  effective: string;
  expiration: string;
  client: Client;
  communication: Communication;

  constructor(clientConfig?: ClientConfiguration) {

    if (clientConfig) {
      this.name               = clientConfig.name;
      this.chanEmailPriority  = clientConfig.chanEmailPriority;
      this.chanIvrPriority    = clientConfig.chanIvrPriority;
      this.chanSmsPriority    = clientConfig.chanSmsPriority;
      this.chanSecurePriority = clientConfig.chanSecurePriority;
      this.chanMailPriority   = clientConfig.chanMailPriority;
      this.chanMobilePriority = clientConfig.chanMobilePriority;
      this.chanDefault        = clientConfig.chanDefault;
      this.required           = clientConfig.required;
      this.mandatory          = clientConfig.mandatory;
    } else {
      this.chanEmailPriority  = 0;
      this.chanIvrPriority    = 0;
      this.chanSmsPriority    = 0;
      this.chanSecurePriority = 0;
      this.chanMailPriority   = 0;
      this.chanMobilePriority = 0;
      this.chanDefault        = 'No';
      this.required           = 'N';
      this.mandatory          = 'N';
    }
  }

  clone() {
    return new ClientConfiguration(this);
  }
}
