import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQustionComponent } from './free-qustion.component';

describe('FreeQustionComponent', () => {
  let component: FreeQustionComponent;
  let fixture: ComponentFixture<FreeQustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeQustionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
