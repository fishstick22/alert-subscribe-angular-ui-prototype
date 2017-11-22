import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { ProgramConfigurationsService } from './program-configurations.service';

describe('ProgramConfigurationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramConfigurationsService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: HttpClient, usevalue: HttpClient }
      ]
    });
  });

  it('should be created', inject([ProgramConfigurationsService], (service: ProgramConfigurationsService) => {
    expect(service).toBeTruthy();
  }));
});
