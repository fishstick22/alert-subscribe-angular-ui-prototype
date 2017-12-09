export class ProgramProfile {
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

      this.defaultOptIn = false;
      this.visibleInUi  = false;
      this.chanEmail    = false;
      this.chanIvr      = false;
      this.chanSms      = false;
      this.chanSecure   = false;
      this.chanMail     = false;
      this.chanMobile   = false;

      this.program      = programId;

    }
  }

  clone() {
    return new ProgramProfile(this.program, this, true);
  }
}
