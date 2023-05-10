import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentDeleteComponent } from './aliment-delete.component';

describe('AlimentDeleteComponent', () => {
  let component: AlimentDeleteComponent;
  let fixture: ComponentFixture<AlimentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
