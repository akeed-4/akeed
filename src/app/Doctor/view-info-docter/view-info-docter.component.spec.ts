import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInfoDocterComponent } from './view-info-docter.component';

describe('ViewInfoDocterComponent', () => {
  let component: ViewInfoDocterComponent;
  let fixture: ComponentFixture<ViewInfoDocterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInfoDocterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInfoDocterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
