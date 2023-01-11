import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorAdminComponent } from './view-doctor-admin.component';

describe('ViewDoctorAdminComponent', () => {
  let component: ViewDoctorAdminComponent;
  let fixture: ComponentFixture<ViewDoctorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
