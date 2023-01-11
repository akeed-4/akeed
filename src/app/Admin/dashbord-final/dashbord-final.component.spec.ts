import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordFinalComponent } from './dashbord-final.component';

describe('DashbordFinalComponent', () => {
  let component: DashbordFinalComponent;
  let fixture: ComponentFixture<DashbordFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
