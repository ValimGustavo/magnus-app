import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelReadComponent } from './level-read.component';

describe('LevelReadComponent', () => {
  let component: LevelReadComponent;
  let fixture: ComponentFixture<LevelReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
