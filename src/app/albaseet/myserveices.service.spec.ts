import { TestBed } from '@angular/core/testing';

import { MyserveicesService } from './myserveices.service';

describe('MyserveicesService', () => {
  let service: MyserveicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserveicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
