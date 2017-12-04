// import { IProgramConfig } from 'app/classes/model/iprog-config';
import { ProgramProfile       } from 'app/shared/model/program-profile';

// export class Program implements IProgramConfig {

export class Program {
  id: number;
  name: string;
  description: string;
  programProfile: ProgramProfile[];
  programConfiguration: number[];
  status: any; // not saved to DB, only used in the UI
  detectChanges: any;

  constructor (
    id: number = 0,
    name: string = '',
    description?: string,
    programProfile?: ProgramProfile[],
    programConfiguration?: number[],
  ) {
    const emptyNum: number[] = [];

    this.id = id;
    this.name = name;
    this.description = (description) ? description : '';
    this.programProfile = (programProfile) ? programProfile : [];
    this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
  }

  clone() {
    return new Program(
      this.id, this.name, this.description,
      this.programProfile,
      this.programConfiguration
    );
  }
}

export class ProgramConfigAction {
  constructor(id: string, type: string) {
    this.progId = id;
    this.configType = type;
  }
  progId: string;
  configType: string;
}

export class ProgramStatus {

    public UNEXPIRED: string = '9999-12-31';

    lastProfile: ProgramProfile;
    expiredProgram: boolean;
    statusText: string;
    effExpDateText: string;

    constructor (program: Program) {
      if (program.programProfile && program.programProfile.length > 0) {
        this.lastProfile = program.programProfile[program.programProfile.length - 1];
        this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
        this.statusText = this.expiredProgram ? 'expired' : 'active';
        this.effExpDateText =
          (this.expiredProgram ? 'exp ' : 'eff ') +
          (this.expiredProgram ? this.lastProfile.expiration : this.lastProfile.effective);
      } else {
        this.statusText = 'undetermined';
        this.effExpDateText = '???';
      }
      // program.detectChanges = 'new';
    }

    update(program: Program) {
      if (program.programProfile && program.programProfile.length > 0) {
        this.lastProfile = program.programProfile[program.programProfile.length - 1];
        this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
        this.statusText = this.expiredProgram ? 'expired' : 'active';
        this.effExpDateText =
          (this.expiredProgram ? 'exp ' : 'eff ') +
          (this.expiredProgram ? this.lastProfile.expiration : this.lastProfile.effective);
      } else {
        this.statusText = 'undetermined';
        this.effExpDateText = '???';
      }
    }
  }
