import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RecipeModel } from 'src/models/recipe.model';
import { ErplibreRestRecipeService } from './erplibre-rest-recipe.service';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	private _recipes: RecipeModel[] = [];
	private recipes = new Subject<RecipeModel[]>();

	get recipes$(): Observable<RecipeModel[]> {
		return this.recipes.asObservable();
	}

	constructor(private erplibreRest: ErplibreRestRecipeService) {
		this.erplibreRest.getRecipes().subscribe((getResponse) => {
			this._recipes = getResponse;
			this.recipes.next(this._recipes);
		});
	}

	getRecipes() {
		this.recipes.next(this._recipes);
	}

	addRecipe(recipe: RecipeModel) {
		this._recipes.push(recipe);
		this.recipes.next(this._recipes);
	}

	setRecipes(recipes: RecipeModel[]) {
		this._recipes = recipes;
		this.recipes.next(this._recipes);
	}

	updateRecipe(recipe: RecipeModel) {
		for (const i in this._recipes) {
			if (this._recipes[i].id === recipe.id) {
				this._recipes[i] = recipe;
				this.recipes.next(this._recipes);
				return;
			}
		}
	}
}
