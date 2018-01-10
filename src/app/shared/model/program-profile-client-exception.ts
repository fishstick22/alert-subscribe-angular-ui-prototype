export class ProgramProfileClientException {
    id: number;
    defaultOptIn: 'Y' | 'N';
    visibleInUi: 'Y' | 'N' | 'P';
    chanEmail:   'Y' | 'N';
    chanIvr:     'Y' | 'N';
    chanSms:     'Y' | 'N';
    chanSecure:  'Y' | 'N';
    chanMail:    'Y' | 'N';
    chanMobile:  'Y' | 'N';
    effective: string;
    expiration: string;
    program: number;
    client: number;

    constructor(programId: number, clientId: number, programProfileClientException?: ProgramProfileClientException) {

      if (programProfileClientException) {
        this.program      = programId;
        this.client       = clientId;

        this.defaultOptIn = programProfileClientException.defaultOptIn;
        this.visibleInUi  = programProfileClientException.visibleInUi;
        this.chanEmail    = programProfileClientException.chanEmail;
        this.chanIvr      = programProfileClientException.chanIvr;
        this.chanSms      = programProfileClientException.chanSms;
        this.chanSecure   = programProfileClientException.chanSecure;
        this.chanMail     = programProfileClientException.chanMail;
        this.chanMobile   = programProfileClientException.chanMobile;
      } else {
        this.program      = programId;
        this.client       = clientId;

        this.defaultOptIn = 'N';
        this.visibleInUi  = 'N';
        this.chanEmail    = 'N';
        this.chanIvr      = 'N';
        this.chanSms      = 'N';
        this.chanSecure   = 'N';
        this.chanMail     = 'N';
        this.chanMobile   = 'N';
      }
    }

    clone() {
      return new ProgramProfileClientException(this.program, this.client, this);
    }
}
