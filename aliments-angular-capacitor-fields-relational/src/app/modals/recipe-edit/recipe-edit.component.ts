import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErplibreRestRecipeService } from 'src/app/services/erplibre-rest-recipe.service';
import { AlimentModel } from 'src/models/aliment.model';
import { RecipeModel } from 'src/models/recipe.model';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent {
	@Input() aliments: AlimentModel[] = [];
	@Input() recipes: RecipeModel[] = [];
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	recipeEditForm: FormGroup = this.formBuilder.group({
		name: new FormControl('', [Validators.required]),
		description: new FormControl(''),
		aliments: new FormControl([], Validators.required),
	});
	recipeEditModal!: NgbModalRef;
	recipeId: number = 0;
	recipeEditFormSubmitted = false;

	get recipe(): RecipeModel {
		return this.recipes.filter((recipe) => recipe.id === this.recipeId)[0];
	}

	get formName() {
		return this.recipeEditForm.get('name');
	}

	get formAliments() {
		return this.recipeEditForm.get('int');
	}

	set recipe(newAliment: RecipeModel) {
		for (let i in this.recipes) {
			if (this.recipes[i].id === this.recipeId) {
				this.recipes[i] = newAliment;
			}
		}
	}

	constructor(
		private formBuilder: FormBuilder,
		private modalService: NgbModal,
		private erplibreRest: ErplibreRestRecipeService
	) {}

	openModal(id: number) {
		this.recipeId = id;
		this.recipeEditModal = this.modalService.open(this.templateRef, {
			scrollable: true,
		});
		this.recipeEditModal.closed.subscribe(() => {
			this.recipeEditForm.reset();
			this.recipeEditFormSubmitted = false;
		});
		this.recipeEditModal.dismissed.subscribe(() => {
			this.recipeEditForm.reset();
			this.recipeEditFormSubmitted = false;
		});
		const currentRecipe = this.recipe;
		this.recipeEditForm.patchValue({
			name: currentRecipe.name || '',
			description: currentRecipe.description || '',
			aliments: currentRecipe.aliments,
		});
	}

	editRecipe() {
		if (this.recipeEditForm.invalid) return;
		const formValue = this.recipeEditForm.value;
		this.erplibreRest
			.updateRecipe(
				this.recipeId,
				formValue.name,
				formValue.description,
				`[[6, 0, [${formValue.aliments}]]]`
			)
			.subscribe({
				next: (response) => {
					this.recipe = new RecipeModel(
						response.id,
						response.name,
						response.description,
						response.aliments
					);
					this.recipeEditModal.close();
				},
				error: (e) => {
					console.error(e);
				},
			});
	}

	alimentInRecipe(id: number) {
		if (this.recipe.aliments.includes(id)) {
			return true;
		}
		return null;
	}
}
