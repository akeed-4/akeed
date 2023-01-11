import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBookingInfoTwoComponent } from './hospital-booking-info-two.component';

describe('HospitalBookingInfoTwoComponent', () => {
  let component: HospitalBookingInfoTwoComponent;
  let fixture: ComponentFixture<HospitalBookingInfoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalBookingInfoTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBookingInfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
