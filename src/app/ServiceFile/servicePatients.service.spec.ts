/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicePatientsService } from './servicePatients.service';

describe('Service: ServicePatients', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePatientsService]
    });
  });

  it('should ...', inject([ServicePatientsService], (service: ServicePatientsService) => {
    expect(service).toBeTruthy();
  }));
});
