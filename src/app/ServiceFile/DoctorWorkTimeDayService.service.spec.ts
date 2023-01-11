/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorWorkTimeDayServiceService } from './DoctorWorkTimeDayService.service';

describe('Service: DoctorWorkTimeDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorWorkTimeDayServiceService]
    });
  });

  it('should ...', inject([DoctorWorkTimeDayServiceService], (service: DoctorWorkTimeDayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
