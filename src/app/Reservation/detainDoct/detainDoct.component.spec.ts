/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetainDoctComponent } from './detainDoct.component';

describe('DetainDoctComponent', () => {
  let component: DetainDoctComponent;
  let fixture: ComponentFixture<DetainDoctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetainDoctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetainDoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
