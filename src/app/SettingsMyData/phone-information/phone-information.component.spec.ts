import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInformationComponent } from './phone-information.component';

describe('PhoneInformationComponent', () => {
  let component: PhoneInformationComponent;
  let fixture: ComponentFixture<PhoneInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
