import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospitalsDataComponent } from './add-hospitals-data.component';

describe('AddHospitalsDataComponent', () => {
  let component: AddHospitalsDataComponent;
  let fixture: ComponentFixture<AddHospitalsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHospitalsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHospitalsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
