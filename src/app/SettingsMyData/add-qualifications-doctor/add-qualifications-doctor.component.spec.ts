import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualificationsDoctorComponent } from './add-qualifications-doctor.component';

describe('AddQualificationsDoctorComponent', () => {
  let component: AddQualificationsDoctorComponent;
  let fixture: ComponentFixture<AddQualificationsDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualificationsDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQualificationsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
