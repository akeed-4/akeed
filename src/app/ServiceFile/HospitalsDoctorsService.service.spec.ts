/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HospitalsDoctorsServiceService } from './HospitalsDoctorsService.service';

describe('Service: HospitalsDoctorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalsDoctorsServiceService]
    });
  });

  it('should ...', inject([HospitalsDoctorsServiceService], (service: HospitalsDoctorsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
