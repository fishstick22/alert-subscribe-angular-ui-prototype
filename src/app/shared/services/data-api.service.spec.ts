import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { DataApiService } from './data-api.service';
// import { CommunicationService } from './communications/communication.service';
import { FakeCommunicationsService,
  Communication, CommunicationService } from './testing/fake-communications.service';

import { FakeProgramsService,
  Program, ProgramService } from './testing/fake-programs.service';

const communication: Communication = new Communication(260, 'Refill Available Notice');
const program: Program = new Program(1, 'Prescription Alerts');

describe('DataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataApiService,
        CommunicationService,
        ProgramService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: CommunicationService, usevalue: FakeCommunicationsService },
        { provide: ProgramService, usevalue: FakeProgramsService }
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
