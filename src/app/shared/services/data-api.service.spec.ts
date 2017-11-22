import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { DataApiService } from './data-api.service';

import {
  Client, ClientsService, FakeClientsService,
  ClientConfiguration, ClientConfigurationsService, FakeClientConfigurationsService,
  Communication, CommunicationsService, FakeCommunicationsService,
  Program, ProgramsService, FakeProgramsService,
  ProgramConfiguration, ProgramConfigurationsService, FakeProgramConfigurationsService,
} from 'app/shared/testing/shared-module-testing-helper';

const communication: Communication = new Communication(260, 'Refill Available Notice');
const program: Program = new Program(1, 'Prescription Alerts');

describe('DataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataApiService,
        CommunicationsService,
        ProgramsService,
        ProgramConfigurationsService,
        ClientsService,
        ClientConfigurationsService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: CommunicationsService, usevalue: FakeCommunicationsService },
        { provide: ProgramsService, usevalue: FakeProgramsService },
        { provide: ProgramConfigurationsService, usevalue: FakeProgramConfigurationsService },
        { provide: ClientsService, usevalue: FakeClientsService },
        { provide: ClientConfigurationsService, usevalue: FakeClientConfigurationsService }
      ]
    });
  });

  it('should be created', inject([DataApiService], (service: DataApiService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return expected communication',  inject([DataApiService], (service: DataApiService) => {
  //   const communications = service.getCommunications();
  //   expect(communications).toBeTruthy();
  //   expect(communications[0]).toBe(communication);
  // }));

});
