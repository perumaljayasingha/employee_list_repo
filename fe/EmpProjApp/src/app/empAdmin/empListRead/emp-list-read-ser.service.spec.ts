import { TestBed } from '@angular/core/testing';

import { EmpListReadSerService } from './emp-list-read-ser.service';

describe('EmpListReadSerService', () => {
  let service: EmpListReadSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpListReadSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
