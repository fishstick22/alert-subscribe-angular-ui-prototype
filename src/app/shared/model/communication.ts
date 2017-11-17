export class Communication {
  id: number;
  name: string;
  description: string;
  programConfiguration: number[];
  clientConfiguration: number[];

  constructor (
    id: number = 0,
    name: string = '',
    description?: string,
    programConfiguration?: number[],
    clientConfiguration?: number[]
  ) {
    const emptyNum: number[] = [];

    this.id = id;
    this.name = name;
    this.description = (description) ? description : '';
    this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
    this.clientConfiguration = (clientConfiguration) ? clientConfiguration : emptyNum;
  }

  clone() {
    return new Communication(
      this.id, this.name, this.description,
      this.programConfiguration, this.clientConfiguration
    );
  }
}

export class CommunicationSortCriteria {
  sortColumn: string;
  sortDirection: string;
}

export class CommunicationConfigAction {
    constructor(id: string, type: string) {
      this.commId = id;
      this.configType = type;
    }
    commId: string;
    configType: string;
}
