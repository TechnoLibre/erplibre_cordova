import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentOptionsComponent } from './aliment-options.component';

describe('AlimentOptionsComponent', () => {
  let component: AlimentOptionsComponent;
  let fixture: ComponentFixture<AlimentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
