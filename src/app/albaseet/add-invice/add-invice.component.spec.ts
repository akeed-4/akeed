import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInviceComponent } from './add-invice.component';

describe('AddInviceComponent', () => {
  let component: AddInviceComponent;
  let fixture: ComponentFixture<AddInviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
