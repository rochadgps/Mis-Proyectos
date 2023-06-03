import { TestBed } from '@angular/core/testing';

import { AsinService } from './asin.service';

describe('AsinService', () => {
  let service: AsinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
