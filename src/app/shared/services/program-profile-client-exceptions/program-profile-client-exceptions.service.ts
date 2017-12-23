import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { ProgramProfileClientException } from 'app/shared/model/program-profile-client-exception';

@Injectable()
export class ProgramProfileClientExceptionsService {

  protected programProfileClientExceptions: ProgramProfileClientException[];
  // protected headers = new Headers({'Content-Type': 'application/json'});
  protected progProfileClientExceptionApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.progProfileClientExceptionApiEndpoint = this.config.apiEndpoint + 'api/programprofileclientexception';  // URL to web api
  }

  async getProgramProfileClientExceptionsThruApi(): Promise<ProgramProfileClientException[]> {
    try {
      const response = await this.http.get(this.progProfileClientExceptionApiEndpoint).toPromise();
      return response as ProgramProfileClientException[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createProgramProfileClientExceptionThruApi(
    programProfileClientException: ProgramProfileClientException
  ): Promise<ProgramProfileClientException> {

    try {
      const response = await this.http.post(
        this.progProfileClientExceptionApiEndpoint,
        programProfileClientException
      ).toPromise();
      return response as ProgramProfileClientException;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateProgramProfileClientExceptionThruApi(
    programProfileClientException: ProgramProfileClientException
  ): Promise<ProgramProfileClientException> {

    try {
      const url = `${this.progProfileClientExceptionApiEndpoint}/${programProfileClientException.id}`;
      const response = await this.http.put(
        url, programProfileClientException
      ).toPromise();
      return response as ProgramProfileClientException;
    } catch (error) {
      this.handleError(error);
    }
  }
  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
