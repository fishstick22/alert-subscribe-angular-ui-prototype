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
