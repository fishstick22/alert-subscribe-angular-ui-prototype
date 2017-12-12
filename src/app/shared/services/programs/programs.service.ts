import { Injectable, Inject } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { Program } from 'app/shared/model/program';

@Injectable()
export class ProgramsService {

  protected programs: Program[];
  protected headers = new Headers({'Content-Type': 'application/json'});
  protected progApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.progApiEndpoint = this.config.apiEndpoint + 'api/program';  // URL to web api
  }

  async getProgramsThruApi(): Promise<Program[]> {
    try {
      const response = await this.http.get(this.progApiEndpoint).toPromise();
      return response as Program[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createProgramThruApi(program: Program): Promise<Program> {
    try {
      const response = await this.http.post(this.progApiEndpoint, program).toPromise();
      return response as Program;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getProgramByIdThruApi(programId: number): Promise<Program> {
    const url = `${this.progApiEndpoint}/${programId}`;
    try {
      const response = await this.http.get(url).toPromise();
      return response as Program;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateProgramThruApi(program: Program): Promise<Program> {
    const url = `${this.progApiEndpoint}/${program.id}`;
    try {
      const response = await this.http.put(url, program).toPromise();
      console.log('updateProgramThruApi response:', response);
      return response as Program;
    } catch (error) {
      this.handleError(error);
    }
  }

  // async deleteProgramThruApi(program: Program): Promise<Program> {
  //   const url = `${this.progApiEndpoint}/${program.id}`;
  //   try {
  //     const response = await this.http.delete(url, {headers: this.headers}).toPromise();
  //     return response as Program;
  //   } catch (error) {
  //     this.handleError(error);
  //   }
  // }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
