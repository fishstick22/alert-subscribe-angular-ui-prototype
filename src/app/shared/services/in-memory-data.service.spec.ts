import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('Shared/Services: InMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  it('should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
