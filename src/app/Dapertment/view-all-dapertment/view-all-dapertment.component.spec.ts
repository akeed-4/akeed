import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDapertmentComponent } from './view-all-dapertment.component';

describe('ViewAllDapertmentComponent', () => {
  let component: ViewAllDapertmentComponent;
  let fixture: ComponentFixture<ViewAllDapertmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDapertmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDapertmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
