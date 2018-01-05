import { TestBed, inject } from '@angular/core/testing';

import { addMatchers, newEvent, Router, RouterStub } from '../../../testing';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useClass: RouterStub},
        { provide: APP_CONFIG, useValue: AppConfig }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
