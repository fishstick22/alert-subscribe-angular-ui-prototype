import { Injectable } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from 'app/core/auth/auth.service';

import { AuthGuard } from './auth.guard';

@Injectable()
export class MockAuthService {
}

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthService,
        { provide: AuthService, useValue: MockAuthService },
      ],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
