import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ErplibreRestAlimentService } from '../services/erplibre-rest-aliment.service';
import { ErplibreRestRecipeService } from '../services/erplibre-rest-recipe.service';
import { RecipeAddComponent } from '../modals/recipe-add/recipe-add.component';
import { AlimentModel } from 'src/models/aliment.model';
import { RecipeModel } from 'src/models/recipe.model';
import { RecipeInfoComponent } from '../modals/recipe-info/recipe-info.component';
import { RecipeOptionsComponent } from '../modals/recipe-options/recipe-options.component';
import { RecipeEditComponent } from '../modals/recipe-edit/recipe-edit.component';
import { RecipeDeleteComponent } from '../modals/recipe-delete/recipe-delete.component';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
	recipes: RecipeModel[] = [];
	aliments: AlimentModel[] = [];
	@ViewChild(RecipeAddComponent) recipeAddComponent!: RecipeAddComponent;
	@ViewChild(RecipeInfoComponent) recipeInfoComponent!: RecipeInfoComponent;
	@ViewChild(RecipeOptionsComponent)
	recipeOptionsComponent!: RecipeOptionsComponent;
	@ViewChild(RecipeEditComponent) recipeEditComponent!: RecipeEditComponent;
	@ViewChild(RecipeDeleteComponent)
	recipeDeleteComponent!: RecipeDeleteComponent;

	constructor(
		private erplibreAlimentsRest: ErplibreRestAlimentService,
		private erplibreRecipesRest: ErplibreRestRecipeService
	) {}

	ngOnInit() {
		this.erplibreAlimentsRest.getAliments().subscribe({
			next: (response: AlimentModel[]) => {
				this.aliments = response;
			},
			error: (e) => {
				console.error(e);
			},
		});
		this.erplibreRecipesRest.getRecipes().subscribe({
			next: (response) => {
				this.recipes = response;
			},
			error: (e) => {
				console.error(e);
			},
		});
	}

	openRecipeAddModal() {
		this.recipeAddComponent.openRecipeAddModal();
	}

	openRecipeInfoModal(event: any, id: number) {
		if (event.target.className === 'recipe__options') {
			return;
		}
		this.recipeInfoComponent.openModal(id);
	}

	openRecipeOptionsModal(id: number) {
		this.recipeOptionsComponent.openModal(id);
	}

	openRecipeEditModal(id: number) {
		this.recipeEditComponent.openModal(id);
	}

	openRecipeDeleteModal(id: number) {
		this.recipeDeleteComponent.openModal(id);
	}

	openFormModal(data: { option: string; id: number }) {
		switch (data.option) {
			case 'edit':
				this.openRecipeEditModal(data.id);
				break;
			case 'delete':
				this.openRecipeDeleteModal(data.id);
				break;
			default:
				break;
		}
	}
}
