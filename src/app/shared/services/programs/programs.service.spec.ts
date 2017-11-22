import { TestBed, inject } from '@angular/core/testing';
// import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { ProgramsService } from './programs.service';

describe('ProgramsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramsService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HttpClient, usevalue: HttpClient }
      ]
    });
  });

  it('should be created', inject([ProgramsService], (service: ProgramsService) => {
    expect(service).toBeTruthy();
  }));
});
