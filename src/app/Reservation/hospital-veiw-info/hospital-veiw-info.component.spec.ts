import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalVeiwInfoComponent } from './hospital-veiw-info.component';

describe('HospitalVeiwInfoComponent', () => {
  let component: HospitalVeiwInfoComponent;
  let fixture: ComponentFixture<HospitalVeiwInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalVeiwInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalVeiwInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
