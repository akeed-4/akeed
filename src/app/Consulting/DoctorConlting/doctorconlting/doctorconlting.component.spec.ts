import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorconltingComponent } from './doctorconlting.component';

describe('DoctorconltingComponent', () => {
  let component: DoctorconltingComponent;
  let fixture: ComponentFixture<DoctorconltingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorconltingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorconltingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
