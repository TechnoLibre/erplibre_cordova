import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentModalsComponent } from './aliment-modals.component';

describe('AlimentModalsComponent', () => {
  let component: AlimentModalsComponent;
  let fixture: ComponentFixture<AlimentModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
