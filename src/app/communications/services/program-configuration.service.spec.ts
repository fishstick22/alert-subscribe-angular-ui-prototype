import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { NgbModal, ModalDismissReasons,
  NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { FakeDataApiService, DataApiService,
  Program, FakeProgramsService, ProgramsService } from 'app/shared/services/testing/fake-data-api.service';

import { ProgramConfigurationService } from './program-configuration.service';

@Injectable()
export class FakeNgbModal {}

describe('ProgramConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramConfigurationService,
        DataApiService,
        NgbModal,
        { provide: NgbModal, usevalue: FakeNgbModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    });
  });

  it('should be created', inject([ProgramConfigurationService], (service: ProgramConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
