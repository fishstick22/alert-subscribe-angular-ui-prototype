import { Component, DebugElement, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';

@Injectable()
export class MockAuthService {
  loggedIn: boolean = true;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  get authenticated(): boolean {
    return this.loggedIn;
  }
}
