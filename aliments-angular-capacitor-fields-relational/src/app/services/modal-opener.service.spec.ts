import { TestBed } from '@angular/core/testing';

import { ModalOpenerService } from './modal-opener.service';

describe('ModalOpenerService', () => {
  let service: ModalOpenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalOpenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
