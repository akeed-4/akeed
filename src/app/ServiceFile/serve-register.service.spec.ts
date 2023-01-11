import { TestBed } from '@angular/core/testing';

import { ServeRegisterService } from './serve-register.service';

describe('ServeRegisterService', () => {
  let service: ServeRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeRegisterService);
  });


  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
