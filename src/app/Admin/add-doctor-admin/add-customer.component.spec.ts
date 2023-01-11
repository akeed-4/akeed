import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorAdminComponent } from './add-doctor-admin.component';


describe('AddDoctorAdminComponent', () => {
  let component: AddDoctorAdminComponent;
  let fixture: ComponentFixture<AddDoctorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
