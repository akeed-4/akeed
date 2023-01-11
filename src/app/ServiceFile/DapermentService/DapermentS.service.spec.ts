/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DapermentSService } from './DapermentS.service';

describe('Service: DapermentS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DapermentSService]
    });
  });

  it('should ...', inject([DapermentSService], (service: DapermentSService) => {
    expect(service).toBeTruthy();
  }));
});
