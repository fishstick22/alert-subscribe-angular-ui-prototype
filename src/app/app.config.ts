import { InjectionToken } from '@angular/core';

import { environment } from 'environments/environment';

// https://auth0.com/blog/angular-2-authentication/
  // Create Auth0 web auth instance
  // auth0 = new auth0.WebAuth({
  //   clientID: AUTH_CONFIG.CLIENT_ID,
  //   domain: AUTH_CONFIG.CLIENT_DOMAIN,
  //   responseType: 'token id_token',
  //   redirectUri: AUTH_CONFIG.REDIRECT,
  //   audience: AUTH_CONFIG.AUDIENCE,
  //   scope: AUTH_CONFIG.SCOPE
  // });
export interface IAuthConfig {
  clientID: string;
  domain: string;
  responseType: string;
  redirectUri: string;
  audience: string;
  scope: string;
}

// https://github.com/angular/angular-cli/issues/2034
export interface IAppConfig {
  apiEndpoint: string;
  envName: string;
  cachePrograms: boolean;
  cacheProgramProfiles: boolean;
  // Auth0 Configuration:
  authConfig: IAuthConfig;
}

// https://github.com/angular/angular-cli/issues/2034
export let APP_CONFIG = new InjectionToken('app.config');

// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
export const AppConfig: IAppConfig = {
  apiEndpoint: environment.apiEndpoint,
  envName: environment.envName,
  cachePrograms: environment.cachePrograms,
  cacheProgramProfiles: environment.cacheProgramProfiles,
  authConfig: {
    clientID: environment.authConfig.client_id,
    domain: environment.authConfig.client_domain,
    responseType: 'token id_token',
    redirectUri: environment.authConfig.redirect,
    audience: environment.authConfig.audience,
    scope: environment.authConfig.scope
  }
};

