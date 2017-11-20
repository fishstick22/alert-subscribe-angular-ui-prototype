import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { NgbModal, ModalDismissReasons,
  NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { FakeDataApiService, DataApiService,
  Program, FakeProgramsService, ProgramsService } from 'app/shared/services/testing/fake-data-api.service';

import { ProgramConfigurationsModalService } from './program-configurations-modal.service';

@Injectable()
export class FakeNgbModal {}

describe('ProgramConfigurationsModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramConfigurationsModalService,
        DataApiService,
        NgbModal,
        { provide: NgbModal, usevalue: FakeNgbModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    });
  });

  it('should be created', inject([ProgramConfigurationsModalService], (service: ProgramConfigurationsModalService) => {
    expect(service).toBeTruthy();
  }));
});
