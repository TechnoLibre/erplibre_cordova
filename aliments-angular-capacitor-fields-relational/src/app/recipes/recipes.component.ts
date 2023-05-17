import { Component, OnInit } from '@angular/core';
import { ErplibreRestAlimentService } from '../services/erplibre-rest-aliment.service';
import { ErplibreRestRecipeService } from '../services/erplibre-rest-recipe.service';
import { AlimentModel } from 'src/models/aliment.model';
import { RecipeModel } from 'src/models/recipe.model';
import { ModalOpenerService } from '../services/modal-opener.service';
import { AlimentService } from '../services/aliment.service';
import { RecipeService } from '../services/recipe.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
	recipes: RecipeModel[] = [];
	aliments: AlimentModel[] = [];

	constructor(
		private erplibreAlimentsRest: ErplibreRestAlimentService,
		private erplibreRecipesRest: ErplibreRestRecipeService,
		private alimentService: AlimentService,
		private recipeService: RecipeService,
		private modalOpener: ModalOpenerService
	) {}

	ngOnInit() {
		this.alimentService.aliments$.subscribe({
			next: (response: AlimentModel[]) => {
				this.aliments = response;
			},
			error: (e) => {
				console.error(e);
			},
		});
		this.recipeService.recipes$.subscribe({
			next: (response) => {
				this.recipes = response;
			},
			error: (e) => {
				console.error(e);
			},
		});
		this.alimentService.getAliments();
		this.recipeService.getRecipes();
	}

	openRecipeInfoModal(event: any, id: number) {
		if (event.target.className === 'recipe__options') {
			return;
		}
		this.modalOpener.openRecipeModal(this.modalOpener.actions.info, id);
	}

	openRecipeOptionsModal(id: number) {
		this.modalOpener.openRecipeModal(this.modalOpener.actions.options, id);
	}
}
