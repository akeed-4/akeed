import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSplicationComponent } from './add-splication.component';

describe('AddSplicationComponent', () => {
  let component: AddSplicationComponent;
  let fixture: ComponentFixture<AddSplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
