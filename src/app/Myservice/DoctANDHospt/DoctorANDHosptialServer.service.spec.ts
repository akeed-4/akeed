/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorANDHosptialServerService } from './DoctorANDHosptialServer.service';

describe('Service: DoctorANDHosptialServer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorANDHosptialServerService]
    });
  });

  it('should ...', inject([DoctorANDHosptialServerService], (service: DoctorANDHosptialServerService) => {
    expect(service).toBeTruthy();
  }));
});
