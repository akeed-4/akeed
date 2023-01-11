import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHospitalAdminComponent } from './view-hospital-admin.component';

describe('ViewHospitalAdminComponent', () => {
  let component: ViewHospitalAdminComponent;
  let fixture: ComponentFixture<ViewHospitalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHospitalAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHospitalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
