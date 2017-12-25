// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'dev',
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
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  }
};
