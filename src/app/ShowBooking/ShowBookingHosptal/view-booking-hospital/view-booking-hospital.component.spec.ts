import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingHospitalComponent } from './view-booking-hospital.component';

describe('ViewBookingHospitalComponent', () => {
  let component: ViewBookingHospitalComponent;
  let fixture: ComponentFixture<ViewBookingHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
