import { TestBed, inject } from '@angular/core/testing';
// import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { CommunicationService } from './communication.service';

describe('CommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommunicationService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HttpClient, usevalue: HttpClient }
      ]
    });
  });

  it('should be created', inject([CommunicationService], (service: CommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
