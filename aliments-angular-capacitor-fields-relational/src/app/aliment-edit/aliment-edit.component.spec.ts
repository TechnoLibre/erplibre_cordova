import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentEditComponent } from './aliment-edit.component';

describe('AlimentEditComponent', () => {
  let component: AlimentEditComponent;
  let fixture: ComponentFixture<AlimentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
