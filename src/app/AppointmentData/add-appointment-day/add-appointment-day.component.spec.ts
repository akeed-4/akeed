import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentDayComponent } from './add-appointment-day.component';

describe('AddAppointmentDayComponent', () => {
  let component: AddAppointmentDayComponent;
  let fixture: ComponentFixture<AddAppointmentDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
