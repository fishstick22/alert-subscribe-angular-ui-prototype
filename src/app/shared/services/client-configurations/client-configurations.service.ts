import { Injectable, Inject }    from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, IAppConfig } from 'app/app.config';

import 'rxjs/add/operator/toPromise';

import { ClientConfiguration } from 'app/shared/model/client-configuration';

@Injectable()
export class ClientConfigurationsService {

  protected clientConfiguration: ClientConfiguration[];
  protected headers = new Headers({'Content-Type': 'application/json'});
  protected clientConfigApiEndpoint;

  constructor(@Inject(APP_CONFIG) protected config: IAppConfig, protected http: HttpClient) {
    this.clientConfigApiEndpoint = this.config.apiEndpoint + 'api/clientconfiguration';  // URL to web api
  }

  async getClientConfigurationsThruApi(): Promise<ClientConfiguration[]> {
    try {
      const response = await this.http.get(this.clientConfigApiEndpoint).toPromise();
      return response as ClientConfiguration[];
    } catch (error) {
      this.handleError(error);
    }
  }

  async createClientConfigurationThruApi(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    try {
      const response = await this.http.post(
        this.clientConfigApiEndpoint,
        clientConfiguration
      ).toPromise();
      return response as ClientConfiguration;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateClientConfigurationThruApi(clientConfiguration: ClientConfiguration): Promise<ClientConfiguration> {
    try {
      const url = `${this.clientConfigApiEndpoint}/${clientConfiguration.id}`;
      const response = await this.http.put(url, clientConfiguration).toPromise();
      return response as ClientConfiguration;
    } catch (error) {
      this.handleError(error);
    }
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
