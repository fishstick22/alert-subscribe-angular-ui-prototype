// import { IProgramConfig } from 'app/classes/model/iprog-config';

// export class Program implements IProgramConfig {

export class Program {
  id: number;
  name: string;
  description: string;
  programConfiguration: number[];

  constructor (
    id: number = 0,
    name: string = '',
    description?: string,
    programConfiguration?: number[],
  ) {
    const emptyNum: number[] = [];

    this.id = id;
    this.name = name;
    this.description = (description) ? description : '';
    this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
  }

  clone() {
    return new Program(
      this.id, this.name, this.description,
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
