import { Injectable, Inject }    from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { Client } from 'app/shared/model/client';

@Injectable()
export class ClientsService {

  protected clients: Client[];
  // protected headers = new Headers({'Content-Type': 'application/json'});
  protected clientApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.clientApiEndpoint = this.config.apiEndpoint + 'api/client';  // URL to web api
  }

  async getClientsThruApi(): Promise<Client[]> {
    try {
      const response = await this.http.get(this.clientApiEndpoint).toPromise();
      return response as Client[];
    } catch (error) {
      this.handleError(error);
    }
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
