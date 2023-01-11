import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHospitalDoctorSettingComponent } from './view-hospital-doctor-setting.component';

describe('ViewHospitalDoctorSettingComponent', () => {
  let component: ViewHospitalDoctorSettingComponent;
  let fixture: ComponentFixture<ViewHospitalDoctorSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHospitalDoctorSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHospitalDoctorSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
