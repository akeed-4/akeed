/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SsssdComponent } from './ssssd.component';

describe('SsssdComponent', () => {
  let component: SsssdComponent;
  let fixture: ComponentFixture<SsssdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsssdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
