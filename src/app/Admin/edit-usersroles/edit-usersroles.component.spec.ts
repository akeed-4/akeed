import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersrolesComponent } from './edit-usersroles.component';

describe('EditUsersrolesComponent', () => {
  let component: EditUsersrolesComponent;
  let fixture: ComponentFixture<EditUsersrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsersrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
