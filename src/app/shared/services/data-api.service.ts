import { Injectable }                  from '@angular/core';

import { CommunicationsService }        from 'app/shared/services/communications/communications.service';

import { ClientsService }               from 'app/shared/services/clients/clients.service';
import { ClientConfigurationsService }  from 'app/shared/services/client-configurations/client-configurations.service';
import { ProgramsService }              from 'app/shared/services/programs/programs.service';
import { ProgramConfigurationsService } from 'app/shared/services/program-configurations/program-configurations.service';

// import { IProgramConfig }              from 'app/classes/model/iprog-config';

import { Communication }               from 'app/shared/model/communication';
import { ClientConfiguration }         from 'app/shared/model/client-configuration';
import { Program }                     from 'app/shared/model/program';
import { ProgramConfiguration }        from 'app/shared/model/program-configuration';
import { Client }                      from 'app/shared/model/client';

@Injectable()
export class DataApiService {

  /********************************************
   * PROTOTYPE IMPLEMENTATION ONLY!!!         *
   * this won't work in production, reading   *
   * the entire dataset into memory IS BAD    *
   * can get away with this with small        *
   * in-memory-data-api, but PROD volume would*
   * NEVERY FLY                               *
   * so replace this with some paging solution*
  *********************************************/
  communications: Communication[];
  clients: Client[];
  clientConfigurations: ClientConfiguration[];
  programs: Program[];
  programConfigurations: ProgramConfiguration[];

  constructor(
    protected communicationsService: CommunicationsService,
    protected clientsService: ClientsService,
    protected clientConfigurationsService: ClientConfigurationsService,
    protected programsService: ProgramsService,
    protected programConfigurationService: ProgramConfigurationsService
  ) { }

  public async getCommunications(): Promise<Communication[]> {
    if (this.communications) {
      return this.communications;
    } else {
      this.communications = await this.communicationsService.getCommunicationsThruApi();
      // return this.removeProgramConfigurationCruft(this.communications);
      return this.communications;
    }
  }

  public async getClients(): Promise<Client[]> {
    if (this.clients) {
      return this.clients;
    } else {
      this.clients = await this.clientsService.getClientsThruApi();
      // return this.removeClientConfigurationCruft(this.clients);
      return this.clients;
    }
  }

  public async getClientConfigurations(): Promise<ClientConfiguration[]> {
    if (this.clientConfigurations) {
      return this.clientConfigurations;
    } else {
      this.clientConfigurations = await this.clientConfigurationsService.getClientConfigurationsThruApi();
      return this.clientConfigurations;
    }
  }

  public async createClientConfiguration(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    clientConfiguration = await this.clientConfigurationsService.createClientConfigurationThruApi(clientConfiguration);
    this.insertClientConfiguration(clientConfiguration);
    return clientConfiguration;
  }

  public async updateClientConfiguration(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    clientConfiguration = await this.clientConfigurationsService.updateClientConfigurationThruApi(clientConfiguration);
    return clientConfiguration;
  }



  public async getPrograms(): Promise<Program[]> {
    if (this.programs) {
      return this.programs;
    } else {
      this.programs = await this.programsService.getProgramsThruApi();
      return this.programs;
      // return this.removeProgramConfigurationCruft(this.programs);
    }
  }

  // public async createProgram(program: Program): Promise<Program> {
  //   program = await this.programService.createProgramThruApi(program);
  //   this.insertProgram(program);
  //   return program;
  // }

  // public async updateProgram(program: Program): Promise<Program> {
  //   await this.programService.updateProgramThruApi(program);
  //   return program;
  // }

  // public async deleteProgram(program: Program): Promise<Program> {
  //   await this.programService.deleteProgramThruApi(program);
  //   this.removeProgram(program);
  //   program = null;
  //   return program;
  // }

  public async getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    if (this.programConfigurations) {
      return this.programConfigurations;
    } else {
      this.programConfigurations = await this.programConfigurationService.getProgramConfigurationsThruApi();
      return this.programConfigurations;
    }
  }

  public async createProgramConfiguration(programConfiguration: ProgramConfiguration): Promise<ProgramConfiguration> {
    programConfiguration = await this.programConfigurationService.createProgramConfigurationThruApi(programConfiguration);
    this.insertProgramConfiguration(programConfiguration);
    return programConfiguration;
  }

  public async updateProgramConfiguration(programConfiguration: ProgramConfiguration): Promise<ProgramConfiguration> {
    programConfiguration = await this.programConfigurationService.updateProgramConfigurationThruApi(programConfiguration);
    return programConfiguration;
  }

  // /*
  // */
  // private insertProgram(program: Program): void {
  //   this.programs.push(program);
  // }

  // private removeProgram(program: Program): void {
  //   const index = this.programs.indexOf(program);
  //   if (index > -1) {
  //     this.programs.splice(index, 1);
  //   }
  // }

  protected insertProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.programConfigurations.push(programConfiguration);
  }

  // private removeProgramConfigurationCruft(progConfigableObjs: IProgramConfig[]): any[] {
  //   // some reason spring rest is giving empty array objects of programConfiguration property
  //   // get rid of them all
  //   for (let i = 0, len = progConfigableObjs.length; i < len; i++) {
  //     if (progConfigableObjs[i].programConfiguration && progConfigableObjs[i].programConfiguration.length) {
  //       progConfigableObjs[i].programConfiguration = [];
  //     }
  //   }
  //   return progConfigableObjs;
  // }

  protected insertClientConfiguration(clientConfiguration: ClientConfiguration): void {
    this.clientConfigurations.push(clientConfiguration);
  }

  // private removeClientConfigurationCruft(clients: Client[]): Client[] {
  //   // some reason spring rest is giving empty array objects of programConfiguration property
  //   // get rid of them all
  //   // for (let i = 0, len = clients.length; i < len; i++) {
  //   //   if (clients[i].programConfiguration && clients[i].programConfiguration.length) {
  //   //     clients[i].programConfiguration = [];
  //   //   }
  //   // }
  //   return clients;
  // }

}
