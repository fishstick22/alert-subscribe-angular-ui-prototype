import { Client }               from './client';
import { Communication }        from './communication';
// import { ICommunicationConfig } from './icomm-config';

// export class ClientConfiguration implements ICommunicationConfig {

export class ClientConfiguration {
  id: number;
  name: string;
  description: string;
  chanEmailPriority: number;
  chanIvrPriority: number;
  chanSmsPriority: number;
  chanMailPriority: number;
  chanMobilePriority: number;
  chanMandatory: 'No' | 'Email' | 'IVR' | 'SMS';
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
      this.chanMailPriority   = clientConfig.chanMailPriority;
      this.chanMobilePriority = clientConfig.chanMobilePriority;
      this.chanMandatory      = clientConfig.chanMandatory;
    } else {
      this.chanEmailPriority  = 0;
      this.chanIvrPriority    = 0;
      this.chanSmsPriority    = 0;
      this.chanMailPriority   = 0;
      this.chanMobilePriority = 0;
      this.chanMandatory      = 'No';
    }
  }

  clone() {
    return new ClientConfiguration(this);
  }
}
