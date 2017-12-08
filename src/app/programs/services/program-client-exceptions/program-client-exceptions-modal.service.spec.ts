import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { NgbModal,
         ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { FakeDataApiService,
         DataApiService,
         Program,
         ProgramProfileClientException
                         } from 'app/shared/testing/shared-module-testing-helper';

import { ProgramClientExceptionsModalService } from './program-client-exceptions-modal.service';

@Injectable()
export class FakeNgbModal {}

describe('ProgramClientExceptionsModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramClientExceptionsModalService,
        DataApiService,
        NgbModal,
        { provide: NgbModal, usevalue: FakeNgbModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    });
  });

  it('should be created', inject([ProgramClientExceptionsModalService], (service: ProgramClientExceptionsModalService) => {
    expect(service).toBeTruthy();
  }));
});
