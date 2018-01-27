export class ProgramProfile {
  id: number;
  displayOrder: number;
  defaultOptIn: 'Y' | 'N';
  visibleInUi: 'Y' | 'N' | 'P';
  chanEmail:  'Y' | 'N';
  chanIvr:    'Y' | 'N';
  chanSms:    'Y' | 'N';
  chanSecure: 'Y' | 'N';
  chanMail:   'Y' | 'N';
  chanMobile: 'Y' | 'N';
  effective: string;
  expiration: string;
  program: number;

  constructor(programId: number, programProfile?: ProgramProfile, inclId?: boolean) {

    if (programProfile) {

      // this.id = inclId ? programProfile.id : undefined;
      if (inclId) {
        this.id = programProfile.id;
      }

      this.defaultOptIn = programProfile.defaultOptIn;
      this.visibleInUi  = programProfile.visibleInUi;
      this.chanEmail    = programProfile.chanEmail;
      this.chanIvr      = programProfile.chanIvr;
      this.chanSms      = programProfile.chanSms;
      this.chanSecure   = programProfile.chanSecure;
      this.chanMail     = programProfile.chanMail;
      this.chanMobile   = programProfile.chanMobile;
      this.effective    = programProfile.effective;
      this.expiration   = programProfile.expiration;

      this.program      = programId;

    } else {

      this.defaultOptIn = 'N';
      this.visibleInUi  = 'N';
      this.chanEmail    = 'N';
      this.chanIvr      = 'N';
      this.chanSms      = 'N';
      this.chanSecure   = 'N';
      this.chanMail     = 'N';
      this.chanMobile   = 'N';

      this.program      = programId;

    }
  }

  clone() {
    return new ProgramProfile(this.program, this, true);
  }
}
