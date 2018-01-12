export const environment = {
  production: false,
  envName: 'dev-api',
  inMemAPI: false,
  apiEndpoint: 'http://localhost:8080/AlertSubscribeServicesPOC/',
  cachePrograms: false,
  cacheProgramProfiles: false,
  // Auth0 Configuration:
  authConfig: {
    client_id: '5dTmLzbTbdfpmJ6Zp5AH9l1ORljfOU2N',
    client_domain: 'fishstick22.auth0.com', // e.g., you.auth0.com
    responseType: 'token id_token',
    audience: 'http://localhost:8080',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  }
};
