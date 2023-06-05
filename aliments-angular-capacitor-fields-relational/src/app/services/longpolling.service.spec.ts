import { TestBed } from '@angular/core/testing';

import { LongpollingService } from './longpolling.service';

describe('LongpollingService', () => {
  let service: LongpollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongpollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
