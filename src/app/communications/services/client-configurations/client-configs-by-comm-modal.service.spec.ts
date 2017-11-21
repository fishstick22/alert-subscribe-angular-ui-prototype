import { TestBed, inject } from '@angular/core/testing';

import { ClientConfigsByCommModalService } from './client-configs-by-comm-modal.service';

describe('ClientConfigsByCommModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientConfigsByCommModalService]
    });
  });

  it('should be created', inject([ClientConfigsByCommModalService], (service: ClientConfigsByCommModalService) => {
    expect(service).toBeTruthy();
  }));
});
