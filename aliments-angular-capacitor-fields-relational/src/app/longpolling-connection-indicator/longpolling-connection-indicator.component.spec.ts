import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongpollingConnectionIndicatorComponent } from './longpolling-connection-indicator.component';

describe('LongpollingConnectionIndicatorComponent', () => {
  let component: LongpollingConnectionIndicatorComponent;
  let fixture: ComponentFixture<LongpollingConnectionIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongpollingConnectionIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongpollingConnectionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
