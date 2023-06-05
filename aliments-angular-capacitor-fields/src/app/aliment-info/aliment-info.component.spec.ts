import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentInfoComponent } from './aliment-info.component';

describe('AlimentInfoComponent', () => {
  let component: AlimentInfoComponent;
  let fixture: ComponentFixture<AlimentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
