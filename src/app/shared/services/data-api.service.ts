import { Injectable, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import { ClientsService               } from './clients/clients.service';
import { ClientConfigurationsService  } from './client-configurations/client-configurations.service';
import { CommunicationsService        } from './communications/communications.service';
import { ProgramsService              } from './programs/programs.service';
import { ProgramProfilesService       } from './program-profiles/program-profiles.service';
import { ProgramConfigurationsService } from './program-configurations/program-configurations.service';
import { ProgramProfileClientExceptionsService
                                      } from './program-profile-client-exceptions/program-profile-client-exceptions.service';

// import { IProgramConfig } from 'app/classes/model/iprog-config';

import { Client               } from 'app/shared/model/client';
import { ClientConfiguration  } from 'app/shared/model/client-configuration';
import { Communication        } from 'app/shared/model/communication';
import { Program              } from 'app/shared/model/program';
import { ProgramProfile       } from 'app/shared/model/program-profile';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';
import { ProgramProfileClientException
                              } from 'app/shared/model/program-profile-client-exception';

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
  programProfiles: ProgramProfile[];
  programProfileClientExceptions: ProgramProfileClientException[];

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig,
    protected communicationsService: CommunicationsService,
    protected clientsService: ClientsService,
    protected clientConfigurationsService: ClientConfigurationsService,
    protected programsService: ProgramsService,
    protected programProfilesService: ProgramProfilesService,
    protected programConfigurationService: ProgramConfigurationsService,
    protected programProfileClientExceptionsService: ProgramProfileClientExceptionsService
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
    if (this.config.cachePrograms && this.programs) {
      console.log('getPrograms', this.config.cachePrograms);
      return this.programs;
    } else {
      console.log('getPrograms', this.config.cachePrograms);
      this.programs = await this.programsService.getProgramsThruApi();
      return this.programs;
      // return this.removeProgramConfigurationCruft(this.programs);
    }
  }

  public async createProgram(program: Program): Promise<Program> {
    try {
      program = await this.programsService.createProgramThruApi(program);
      this.insertProgram(program);
      return program;
    } catch (error) {
      return Promise.reject(error.message || error);
    }

  }

  public async getProgramById(programId: number): Promise<Program> {
    const program: Program = await this.programsService.getProgramByIdThruApi(programId);
    return program;
  }

  public async updateProgram(program: Program): Promise<Program> {
    const updateProgram = await this.programsService.updateProgramThruApi(program);
    console.log('DataApiService updateProgram:', updateProgram);
    // in-memory-web-api returning null even tough update works?
    if (updateProgram) {
      return updateProgram;
    }
    return this.getProgramById(program.id);
  }

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

  //
  public async getProgramProfiles(): Promise<ProgramProfile[]> {
    if (this.config.cacheProgramProfiles && this.programProfiles) {
      console.log('getProgramProfiles', this.config.cacheProgramProfiles);
      return this.programProfiles;
    } else {
      console.log('getProgramProfiles', this.config.cacheProgramProfiles);
      this.programProfiles = await this.programProfilesService.getProgramProfilesThruApi();
      return this.programProfiles;
    }
  }

  public async createProgramProfile(programProfile: ProgramProfile): Promise<ProgramProfile> {
    const newProgramProfile = await this.programProfilesService.createProgramProfileThruApi(programProfile);
    this.insertProgramProfile(newProgramProfile);
    return newProgramProfile;
  }

  public async getProgramProfileById(programProfileId: number): Promise<ProgramProfile> {
    const programProfile: ProgramProfile = await this.programProfilesService.getProgramProfileByIdThruApi(programProfileId);
    return programProfile;
  }

  public async updateProgramProfile(programProfile: ProgramProfile): Promise<ProgramProfile> {
    const updateProgramProfile = await this.programProfilesService.updateProgramProfileThruApi(programProfile);
    // in-memory-web-api returning null even tough update works?
    if (updateProgramProfile) {
      return updateProgramProfile;
    }
    return this.getProgramProfileById(programProfile.id);
  }

  //
  public async getProgramProfileClientExceptions(): Promise<ProgramProfileClientException[]> {
    if (this.programProfileClientExceptions) {
      return this.programProfileClientExceptions;
    } else {
      this.programProfileClientExceptions = await this.programProfileClientExceptionsService.getProgramProfileClientExceptionsThruApi();
      return this.programProfileClientExceptions;
    }
  }

  public async createProgramProfileClientException(
    programProfileClientException: ProgramProfileClientException
  ): Promise<ProgramProfileClientException> {

    programProfileClientException =
      await this.programProfileClientExceptionsService.createProgramProfileClientExceptionThruApi(programProfileClientException);
    this.insertProgramProfileClientException(programProfileClientException);
    return programProfileClientException;
  }

  public async updateProgramProfileClientException(
    programProfileClientException: ProgramProfileClientException
  ): Promise<ProgramProfileClientException> {

    programProfileClientException =
      await this.programProfileClientExceptionsService.updateProgramProfileClientExceptionThruApi(programProfileClientException);
    return programProfileClientException;
  }
  /*
  */
  private insertProgram(program: Program): void {
    if (program && this.programs) {
      this.programs.push(program);
    }
  }

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


  protected insertProgramProfile(programProfile: ProgramProfile): void {
    this.programProfiles.push(programProfile);
  }
  protected insertProgramProfileClientException(programProfileClientException: ProgramProfileClientException): void {
    this.programProfileClientExceptions.push(programProfileClientException);
  }
}
