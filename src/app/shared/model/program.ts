// import { IProgramConfig } from 'app/classes/model/iprog-config';
import { AppConstants } from 'app/app-constants';
import { ProgramProfile       } from 'app/shared/model/program-profile';

// export class Program implements IProgramConfig {

export class Program {
  id: number;
  name: string;
  description: string;
  programProfile: ProgramProfile[];
  programProfileClientException: number[];
  programConfiguration: number[];
  status: any; // not saved to DB, only used in the UI
  detectChanges: any;

  constructor (
    id: number = 0,
    name: string = '',
    description?: string,
    programProfile?: ProgramProfile[],
    programProfileClientException?: number[],
    programConfiguration?: number[],
  ) {
    const emptyNum: number[] = [];

    this.id = id;
    this.name = name;
    this.description = (description) ? description : '';
    this.programProfile = (programProfile) ? programProfile : [];
    this.programProfileClientException = (programProfileClientException) ? programProfileClientException : emptyNum;
    this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
  }

  clone() {
    return new Program(
      this.id, this.name, this.description,
      this.programProfile,
      this.programProfileClientException,
      this.programConfiguration
    );
  }
}

export class ProgramConfigAction {
  progId: string;
  configType: string;

  constructor(id: string, type: string) {
    this.progId = id;
    this.configType = type;
  }
}

export class ProgramStatus {

  lastProfile: ProgramProfile;
  expiredProgram: boolean;
  statusText: string;
  effExpDateText: string;

  constructor (program: Program) {
    this.setStatus(program);
    // program.detectChanges = 'new';
  }

  update(program: Program) {
    this.setStatus(program);
  }

  private setStatus(program: Program) {
    if (program.programProfile && program.programProfile.length > 0) {
      program.programProfile.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
      this.lastProfile = program.programProfile[program.programProfile.length - 1];
      this.expiredProgram = (this.lastProfile.expiration !== AppConstants.UNEXPIRED);
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
