import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { ProgramProfileClientExceptionsService } from './program-profile-client-exceptions.service';

describe('ProgramProfileClientExceptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramProfileClientExceptionsService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HttpClient, usevalue: HttpClient }
      ]
    });
  });

  it('should be created', inject([ProgramProfileClientExceptionsService], (service: ProgramProfileClientExceptionsService) => {
    expect(service).toBeTruthy();
  }));
});
