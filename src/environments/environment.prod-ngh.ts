export const environment = {
  production: true,
  envName: 'GitHub Pages',
  inMemAPI: true,
  apiEndpoint: '',
  cachePrograms: false,
  cacheProgramProfiles: false,
  // Auth0 Configuration:
  authConfig: {
    client_id: '5dTmLzbTbdfpmJ6Zp5AH9l1ORljfOU2N',
    client_domain: 'fishstick22.auth0.com', // e.g., you.auth0.com
    responseType: 'token id_token',
    audience: 'http://localhost:8080',
    redirect: 'https://fishstick22.github.io/alert-subscribe-angular-ui-prototype/callback',
    scope: 'openid profile email'
  }
};
