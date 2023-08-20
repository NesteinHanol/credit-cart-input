import { TestBed } from '@angular/core/testing';

import { CreditCartInputService } from './credit-cart-input.service';

describe('CreditCartInputService', () => {
  let service: CreditCartInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCartInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
