import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQusationComponent } from './home-qusation.component';

describe('HomeQusationComponent', () => {
  let component: HomeQusationComponent;
  let fixture: ComponentFixture<HomeQusationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeQusationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQusationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
