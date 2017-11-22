import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { NgbModal, ModalDismissReasons,
  NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { FakeDataApiService, DataApiService,
  Program, FakeProgramsService, ProgramsService } from 'app/shared/testing/shared-module-testing-helper';

import { ProgramConfigsByCommModalService } from './prog-configs-by-comm-modal.service';

@Injectable()
export class FakeNgbModal {}

describe('ProgramConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramConfigsByCommModalService,
        DataApiService,
        NgbModal,
        { provide: NgbModal, usevalue: FakeNgbModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    });
  });

  it('should be created', inject([ProgramConfigsByCommModalService], (service: ProgramConfigsByCommModalService) => {
    expect(service).toBeTruthy();
  }));
});
