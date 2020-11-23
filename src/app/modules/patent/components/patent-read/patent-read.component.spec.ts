import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentReadComponent } from './patent-read.component';

describe('PatentReadComponent', () => {
  let component: PatentReadComponent;
  let fixture: ComponentFixture<PatentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
