import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { ProgramProfilesService } from './program-profiles.service';

describe('ProgramProfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramProfilesService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HttpClient, usevalue: HttpClient }
      ]
    });
  });

  it('should be created', inject([ProgramProfilesService], (service: ProgramProfilesService) => {
    expect(service).toBeTruthy();
  }));
});
