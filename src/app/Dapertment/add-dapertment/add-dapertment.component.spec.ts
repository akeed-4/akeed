import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDapertmentComponent } from './add-dapertment.component';

describe('AddDapertmentComponent', () => {
  let component: AddDapertmentComponent;
  let fixture: ComponentFixture<AddDapertmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDapertmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDapertmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
