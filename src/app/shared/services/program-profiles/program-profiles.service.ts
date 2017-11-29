import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { ProgramProfile } from 'app/shared/model/program-profile';

@Injectable()
export class ProgramProfilesService {

  protected programProfiles: ProgramProfile[];
  // protected headers = new Headers({'Content-Type': 'application/json'});
  protected progProfileApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.progProfileApiEndpoint = this.config.apiEndpoint + 'api/programprofile';  // URL to web api
  }

  async getProgramProfilesThruApi(): Promise<ProgramProfile[]> {
    try {
      const response = await this.http.get(this.progProfileApiEndpoint).toPromise();
      return response as ProgramProfile[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createProgramProfileThruApi(programProfile: ProgramProfile): Promise<ProgramProfile> {
    try {
      const response = await this.http.post(
        this.progProfileApiEndpoint,
        programProfile
      ).toPromise();
      return response as ProgramProfile;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateProgramProfileThruApi(programProfile: ProgramProfile): Promise<ProgramProfile> {
    try {
      const url = `${this.progProfileApiEndpoint}/${programProfile.id}`;
      const response = await this.http.put(
        url, programProfile
      ).toPromise();
      return response as ProgramProfile;
    } catch (error) {
      this.handleError(error);
    }
  }
  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
