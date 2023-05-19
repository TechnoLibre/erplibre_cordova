import { TestBed } from '@angular/core/testing';

import { ErplibreRestAlimentService } from './erplibre-rest-aliment.service';

describe('ErplibreRestAlimentService', () => {
	let service: ErplibreRestAlimentService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ErplibreRestAlimentService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
