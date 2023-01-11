import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSplicationHospitalComponent } from './add-splication-hospital.component';

describe('AddSplicationHospitalComponent', () => {
  let component: AddSplicationHospitalComponent;
  let fixture: ComponentFixture<AddSplicationHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSplicationHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSplicationHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
