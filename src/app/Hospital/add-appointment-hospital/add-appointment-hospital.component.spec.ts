import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentHospitalComponent } from './add-appointment-hospital.component';

describe('AddAppointmentHospitalComponent', () => {
  let component: AddAppointmentHospitalComponent;
  let fixture: ComponentFixture<AddAppointmentHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
