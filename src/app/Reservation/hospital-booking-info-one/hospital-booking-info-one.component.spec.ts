import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBookingInfoOneComponent } from './hospital-booking-info-one.component';

describe('HospitalBookingInfoOneComponent', () => {
  let component: HospitalBookingInfoOneComponent;
  let fixture: ComponentFixture<HospitalBookingInfoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalBookingInfoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBookingInfoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
