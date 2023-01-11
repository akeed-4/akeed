import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorHospitalComponent } from './add-doctor-hospital.component';

describe('AddDoctorHospitalComponent', () => {
  let component: AddDoctorHospitalComponent;
  let fixture: ComponentFixture<AddDoctorHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
