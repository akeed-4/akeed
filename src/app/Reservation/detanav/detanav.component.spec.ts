/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetanavComponent } from './detanav.component';

describe('DetanavComponent', () => {
  let component: DetanavComponent;
  let fixture: ComponentFixture<DetanavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetanavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetanavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
