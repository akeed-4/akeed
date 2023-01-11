import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalVeiwdatainComponent } from './hospital-veiwdatain.component';

describe('HospitalVeiwdatainComponent', () => {
  let component: HospitalVeiwdatainComponent;
  let fixture: ComponentFixture<HospitalVeiwdatainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalVeiwdatainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalVeiwdatainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
