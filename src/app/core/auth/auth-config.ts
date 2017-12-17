// https://auth0.com/blog/angular-2-authentication/
interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '5dTmLzbTbdfpmJ6Zp5AH9l1ORljfOU2N',
  CLIENT_DOMAIN: 'fishstick22.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:8080',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile email'
};
