import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingHospitalNewComponent } from './view-booking-hospital-new.component';

describe('ViewBookingHospitalNewComponent', () => {
  let component: ViewBookingHospitalNewComponent;
  let fixture: ComponentFixture<ViewBookingHospitalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingHospitalNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingHospitalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
