// import { IClientConfig } from 'app/classes/model/iclient-config';

export class Client { // implements IClientConfig {
  id: number;
  code: string;
  name: string;
  clientConfiguration: number[];

  constructor (
    id: number = 0,
    code: string = '',
    name: string = '',
    clientConfiguration?: number[],
  ) {
    const emptyNum: number[] = [];

    this.id = id;
    this.code = code;
    this.name = name;
    this.clientConfiguration = (clientConfiguration) ? clientConfiguration : emptyNum;
  }

  clone() {
    return new Client(
      this.id, this.code, this.name,
      this.clientConfiguration
    );
  }
}

export class ClientSortCriteria {
  sortColumn: string;
  sortDirection: string;
}

export class ClientConfigAction {
  constructor(id: string, type: string) {
    this.clientId = id;
    this.configType = type;
  }
  clientId: string;
  configType: string;
}
