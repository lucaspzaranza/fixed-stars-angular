import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedStarComponent } from './fixed-star.component';

describe('FixedStarComponent', () => {
  let component: FixedStarComponent;
  let fixture: ComponentFixture<FixedStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedStarComponent]
    });
    fixture = TestBed.createComponent(FixedStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
