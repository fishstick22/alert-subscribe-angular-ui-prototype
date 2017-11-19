import { Injectable, Inject } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { ProgramConfiguration }   from 'app/shared/model/program-configuration';

@Injectable()
export class ProgramConfigurationsService {

  protected programConfigurations: ProgramConfiguration[];
  protected headers = new Headers({'Content-Type': 'application/json'});
  protected progConfigApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.progConfigApiEndpoint = this.config.apiEndpoint + 'api/programconfiguration';  // URL to web api
  }

  async getProgramConfigurationsThruApi(): Promise<ProgramConfiguration[]> {
    try {
      const response = await this.http.get(this.progConfigApiEndpoint).toPromise();
      return response as ProgramConfiguration[];
    } catch (error) {
      this.handleError(error);
    }
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
