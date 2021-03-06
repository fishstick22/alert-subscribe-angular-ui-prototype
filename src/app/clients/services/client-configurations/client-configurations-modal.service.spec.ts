import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import {
  Client, FakeClientsService, ClientsService,
  DataApiService, FakeDataApiService
} from 'app/shared/testing/shared-module-testing-helper';

import { ClientConfigurationsModalService } from './client-configurations-modal.service';

@Injectable()
export class FakeNgbModal {}

describe('ClientConfigurationsModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientConfigurationsModalService,
        DataApiService,
        NgbModal,
        { provide: NgbModal, usevalue: FakeNgbModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    });
  });

  it('should be created', inject([ClientConfigurationsModalService], (service: ClientConfigurationsModalService) => {
    expect(service).toBeTruthy();
  }));
});
