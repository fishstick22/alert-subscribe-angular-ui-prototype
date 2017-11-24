import { Injectable, Inject } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// https://github.com/angular/angular/issues/20096
// Importing both HttpModule and HttpClientModule fixes the problem.
// It's caused by angular2-jwt because it still relies on the first one.
// TODO take out HttpModule when it becomes deprecated
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { Communication } from 'app/shared/model/communication';

@Injectable()
export class CommunicationsService {

  protected communications: Communication[];
  protected headers = new Headers({'Content-Type': 'application/json'});
  protected commApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.commApiEndpoint = this.config.apiEndpoint + 'api/communication';  // URL to web api
  }

  async getCommunicationsThruApi(): Promise<Communication[]> {
    try {
      const response = await this.http.get(this.commApiEndpoint).toPromise();
      // return response.json() as Communication[];
      return response as Communication[];
    } catch (error) {
      this.handleError(error);
    }
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
