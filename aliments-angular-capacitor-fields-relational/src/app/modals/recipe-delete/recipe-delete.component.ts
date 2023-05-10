import {
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErplibreRestRecipeService } from 'src/app/services/erplibre-rest-recipe.service';
import { RecipeModel } from 'src/models/recipe.model';

@Component({
	selector: 'app-recipe-delete',
	templateUrl: './recipe-delete.component.html',
	styleUrls: ['./recipe-delete.component.scss'],
})
export class RecipeDeleteComponent {
	@Input() recipes: RecipeModel[] = [];
	@Output() recipesChange = new EventEmitter<RecipeModel[]>();
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	recipeId: number = 0;
	recipeDeleteModal!: NgbModalRef;

	constructor(
		private modalService: NgbModal,
		private erplibreRest: ErplibreRestRecipeService
	) {}

	openModal(id: number) {
		this.recipeId = id;
		this.recipeDeleteModal = this.modalService.open(this.templateRef);
	}

	deleteRecipe() {
		this.erplibreRest.deleteRecipe(this.recipeId).subscribe({
			next: (_deleteResponse) => {
				const newRecipes: RecipeModel[] = [];
				for (const recipe of this.recipes) {
					if (recipe.id !== this.recipeId) {
						newRecipes.push(recipe);
					}
				}
				this.recipes = newRecipes;
				this.recipesChange.emit(newRecipes);
				this.recipeDeleteModal.close();
			},
			error: (e) => {
				console.error(e);
			},
		});
	}

	getCurrentRecipe() {
		return this.recipes.filter((recipe) => recipe.id === this.recipeId)[0];
	}
}
