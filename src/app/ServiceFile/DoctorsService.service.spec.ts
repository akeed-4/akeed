/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorsServiceService } from './DoctorsService.service';

describe('Service: DoctorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorsServiceService]
    });
  });

  it('should ...', inject([DoctorsServiceService], (service: DoctorsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
