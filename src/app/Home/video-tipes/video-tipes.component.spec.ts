import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTipesComponent } from './video-tipes.component';

describe('VideoTipesComponent', () => {
  let component: VideoTipesComponent;
  let fixture: ComponentFixture<VideoTipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
