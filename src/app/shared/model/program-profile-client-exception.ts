export class ProgramProfileClientException {
    id: number;
    defaultOptIn: boolean;
    visibleInUi: boolean;
    chanEmail: boolean;
    chanIvr: boolean;
    chanSms: boolean;
    chanSecure: boolean;
    chanMail: boolean;
    chanMobile: boolean;
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

        this.defaultOptIn = false;
        this.visibleInUi  = false;
        this.chanEmail    = false;
        this.chanIvr      = false;
        this.chanSms      = false;
        this.chanSecure   = false;
        this.chanMail     = false;
        this.chanMobile   = false;
      }
    }

    clone() {
      return new ProgramProfileClientException(this.program, this.client, this);
    }
}
