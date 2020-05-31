/* eslint-disable lines-between-class-members */
import { WebAuth } from 'auth0-js';
import config from './config';

class Auth {
  auth0: WebAuth;
  idToken: string;
  expiresAt: number;

  constructor() {
    this.idToken = '';
    this.expiresAt = 0;
    this.auth0 = new WebAuth({
      domain: config.auth0.domain,
      clientID: config.auth0.clientID,
      redirectUri: config.auth0.redirectUri,
      responseType: config.auth0.responseType,
      scope: config.auth0.scope,
    });
  }

  login(email: string, password: string, realm = 'Username-Password-Authentication') {
    return new Promise((resolve, reject) => {
      this.auth0.login(
        {
          email,
          password,
          realm,
        },
        (err, authResult) => {
          if (err) return reject(err);
          return resolve(authResult);
        }
      );
    });
  }

  signup(
    email: string,
    username: string,
    password: string,
    realm = 'Username-Password-Authentication'
  ) {
    return new Promise((resolve, reject) => {
      this.auth0.signup(
        {
          connection: realm,
          email,
          password,
          username,
        },
        (err, authResult) => {
          if (err) return reject(err);
          return resolve(authResult);
        }
      );
    });
  }
}

const auth = new Auth();

export default auth;
