import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import {
  Client, ClientActionTableStubComponent,
  FakeDataApiService, DataApiService
} from 'app/shared/testing/shared-module-testing-helper';

import { ClientConfigsByCommModalService } from './client-configs-by-comm-modal.service';

@Injectable()
export class FakeNgbModal {}

describe('ClientConfigsByCommModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientConfigsByCommModalService,
        DataApiService,
        NgbModal,
        { provide: DataApiService, usevalue: FakeDataApiService },
        { provide: NgbModal, usevalue: FakeNgbModal },
      ]
    });
  });

  it('should be created', inject([ClientConfigsByCommModalService], (service: ClientConfigsByCommModalService) => {
    expect(service).toBeTruthy();
  }));
});
