import { TestBed } from '@angular/core/testing';

import { ErplibreRestRecipeService } from './erplibre-rest-recipe.service';

describe('ErplibreRestRecipeService', () => {
  let service: ErplibreRestRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErplibreRestRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
