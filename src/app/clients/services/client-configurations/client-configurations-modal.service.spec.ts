import { TestBed, inject } from '@angular/core/testing';

import { ClientConfigurationsModalService } from './client-configurations-modal.service';

describe('ClientConfigurationsModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientConfigurationsModalService]
    });
  });

  it('should be created', inject([ClientConfigurationsModalService], (service: ClientConfigurationsModalService) => {
    expect(service).toBeTruthy();
  }));
});
