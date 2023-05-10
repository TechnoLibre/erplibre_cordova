import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentAddComponent } from './aliment-add.component';

describe('AlimentAddComponent', () => {
  let component: AlimentAddComponent;
  let fixture: ComponentFixture<AlimentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
