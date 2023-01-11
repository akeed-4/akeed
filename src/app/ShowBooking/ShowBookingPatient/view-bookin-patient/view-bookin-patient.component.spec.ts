import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookinPatientComponent } from './view-bookin-patient.component';

describe('ViewBookinPatientComponent', () => {
  let component: ViewBookinPatientComponent;
  let fixture: ComponentFixture<ViewBookinPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookinPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookinPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
