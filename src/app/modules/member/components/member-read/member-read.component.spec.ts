import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReadComponent } from './member-read.component';

describe('MemberReadComponent', () => {
  let component: MemberReadComponent;
  let fixture: ComponentFixture<MemberReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
