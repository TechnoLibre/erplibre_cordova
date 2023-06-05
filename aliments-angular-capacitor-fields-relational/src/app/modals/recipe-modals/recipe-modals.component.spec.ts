import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModalsComponent } from './recipe-modals.component';

describe('RecipeModalsComponent', () => {
  let component: RecipeModalsComponent;
  let fixture: ComponentFixture<RecipeModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
