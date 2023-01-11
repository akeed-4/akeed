import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSetupHospitalComponent } from './profile-setup-hospital.component';

describe('ProfileSetupHospitalComponent', () => {
  let component: ProfileSetupHospitalComponent;
  let fixture: ComponentFixture<ProfileSetupHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSetupHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSetupHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
