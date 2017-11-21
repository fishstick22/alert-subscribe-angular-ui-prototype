import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { ClientConfigurationsService } from './client-configurations.service';

describe('ClientConfigurationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientConfigurationsService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HttpClient, usevalue: HttpClient }
      ]
    });
  });

  it('should be created', inject([ClientConfigurationsService], (service: ClientConfigurationsService) => {
    expect(service).toBeTruthy();
  }));
});
