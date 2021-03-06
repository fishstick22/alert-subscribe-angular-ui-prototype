import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { FakeDataApiService,
         DataApiService,
         Program,
         FakeProgramsService,
         ProgramsService } from 'app/shared/testing/shared-module-testing-helper';

import { ProgramsMaintenanceModalService } from './programs-maintenance-modal.service';

@Injectable()
export class FakeNgbModal {}

describe('ProgramsMaintenanceModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramsMaintenanceModalService,
        DataApiService,
        NgbModal,
        { provide: NgbModal, usevalue: FakeNgbModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    });
  });

  it('should be created', inject([ProgramsMaintenanceModalService], (service: ProgramsMaintenanceModalService) => {
    expect(service).toBeTruthy();
  }));
});
