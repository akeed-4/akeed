/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HospitalsServiceService } from './HospitalsService.service';

describe('Service: HospitalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalsServiceService]
    });
  });

  it('should ...', inject([HospitalsServiceService], (service: HospitalsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
