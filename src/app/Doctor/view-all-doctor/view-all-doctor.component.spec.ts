import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDoctorComponent } from './view-all-doctor.component';

describe('ViewAllDoctorComponent', () => {
  let component: ViewAllDoctorComponent;
  let fixture: ComponentFixture<ViewAllDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
