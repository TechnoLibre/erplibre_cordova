import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { AlimentService } from 'src/app/services/aliment.service';
import { ErplibreRestRecipeService } from 'src/app/services/erplibre-rest-recipe.service';
import { ModalOpenerService } from 'src/app/services/modal-opener.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { AlimentModel } from 'src/models/aliment.model';
import { RecipeModel } from 'src/models/recipe.model';

@Component({
	selector: 'app-recipe-modals',
	templateUrl: './recipe-modals.component.html',
	styleUrls: ['./recipe-modals.component.scss'],
})
export class RecipeModalsComponent {
	recipes: RecipeModel[] = [];
	aliments: AlimentModel[] = [];

	@ViewChild('templateAdd') addModalTemplate!: TemplateRef<any>;
	@ViewChild('templateDelete') deleteModalTemplate!: TemplateRef<any>;
	@ViewChild('templateEdit') editModalTemplate!: TemplateRef<any>;
	@ViewChild('templateInfo') infoModalTemplate!: TemplateRef<any>;
	@ViewChild('templateOptions') optionsModalTemplate!: TemplateRef<any>;

	addModal!: NgbModalRef;
	deleteModal!: NgbModalRef;
	editModal!: NgbModalRef;
	infoModal!: NgbModalRef;
	optionsModal!: NgbModalRef;

	addFormGroup: FormGroup = this.formBuilder.group({
		name: new FormControl('', Validators.required),
		description: new FormControl(''),
		aliments: new FormControl([], Validators.required),
	});

	editFormGroup: FormGroup = this.formBuilder.group({
		name: new FormControl('', [Validators.required]),
		description: new FormControl(''),
		aliments: new FormControl([], Validators.required),
	});

	get addName() {
		return this.addFormGroup.get('name');
	}

	get addAliments() {
		return this.addFormGroup.get('aliments');
	}

	get editName() {
		return this.editFormGroup.get('name');
	}

	get editAliments() {
		return this.editFormGroup.get('aliments');
	}

	addFormSubmitted = false;
	editFormSubmitted = false;
	currentRecipeId = 0;

	get currentRecipe(): RecipeModel {
		return this.recipes.filter(
			(recipe) => recipe.id === this.currentRecipeId
		)[0];
	}

	constructor(
		private errorHandlerService: ErrorHandlerService,
		private recipeService: RecipeService,
		private alimentService: AlimentService,
		private erplibreRestRecipeService: ErplibreRestRecipeService,
		private modalService: NgbModal,
		private formBuilder: FormBuilder,
		private modalOpener: ModalOpenerService
	) {
		this.alimentService.aliments$.subscribe((response) => {
			this.aliments = response;
		});
		this.recipeService.recipes$.subscribe((response) => {
			this.recipes = response;
		});
		this.modalOpener.recipeModalOpener$.subscribe({
			next: (response) => {
				switch (response.action) {
					case this.modalOpener.actions.add:
						this.openAddModal();
						break;
					case this.modalOpener.actions.info:
						if (response.id) {
							this.openInfoModal(response.id);
						}
						break;
					case this.modalOpener.actions.options:
						if (response.id) {
							this.openOptionsModal(response.id);
						}
						break;
					default:
						break;
				}
			},
			error: (error) => {
				this.errorHandlerService.handleError(error);
			},
		});

		this.alimentService.getAliments();
		this.recipeService.getRecipes();
	}

	openAddModal(): void {
		this.addModal = this.modalService.open(this.addModalTemplate);
		this.addModal.closed.subscribe((_result) => {
			this.addFormSubmitted = false;
			this.addFormGroup.reset();
		});
		this.addModal.dismissed.subscribe((_result) => {
			this.addFormSubmitted = false;
			this.addFormGroup.reset();
		});
	}

	openDeleteModal(id: number): void {
		if (this.optionsModal) {
			this.optionsModal.close();
		}
		this.currentRecipeId = id;
		this.deleteModal = this.modalService.open(this.deleteModalTemplate);
	}

	openEditModal(id: number): void {
		if (this.optionsModal) {
			this.optionsModal.close();
		}
		this.currentRecipeId = id;
		this.editModal = this.modalService.open(this.editModalTemplate, {
			scrollable: true,
		});
		this.editModal.closed.subscribe(() => {
			this.editFormGroup.reset();
			this.editFormSubmitted = false;
		});
		this.editModal.dismissed.subscribe(() => {
			this.editFormGroup.reset();
			this.editFormSubmitted = false;
		});
		this.editFormGroup.patchValue({
			name: this.currentRecipe.name || '',
			description: this.currentRecipe.description,
			aliments: this.currentRecipe.aliments,
		});
	}

	openInfoModal(id: number): void {
		this.currentRecipeId = id;
		this.infoModal = this.modalService.open(this.infoModalTemplate);
	}

	openOptionsModal(id: number): void {
		this.currentRecipeId = id;
		this.optionsModal = this.modalService.open(this.optionsModalTemplate);
	}

	addRecipe(): void {
		this.addFormSubmitted = true;
		if (this.addFormGroup.invalid) return;
		const formValue = this.addFormGroup.value;
		this.erplibreRestRecipeService
			.addRecipe(
				formValue.name!,
				formValue.description!,
				`[[6, 0, [${formValue.aliments}]]]`
			)
			.subscribe({
				next: (addResponse) => {
					this.addFormSubmitted = false;
					this.addModal.close();
					this.recipes.push(addResponse);
				},
				error: (error) => {
					this.errorHandlerService.handleError(error);
				},
			});
	}

	deleteRecipe(): void {
		this.erplibreRestRecipeService
			.deleteRecipe(this.currentRecipeId)
			.subscribe({
				next: (_deleteResponse) => {
					const newRecipes: RecipeModel[] = [];
					for (const recipe of this.recipes) {
						if (recipe.id !== this.currentRecipeId) {
							newRecipes.push(recipe);
						}
					}
					this.recipeService.setRecipes(
						this.getAllRecipesExcept(this.currentRecipeId)
					);
					this.deleteModal.close();
				},
				error: (error) => {
					this.errorHandlerService.handleError(error);
				},
			});
	}

	editRecipe(): void {
		this.editFormSubmitted = true;
		if (this.editFormGroup.invalid) return;
		const formValue = this.editFormGroup.value;
		this.erplibreRestRecipeService
			.updateRecipe(
				this.currentRecipeId,
				formValue.name,
				formValue.description,
				`[[6, 0, [${formValue.aliments}]]]`
			)
			.subscribe({
				next: (response) => {
					this.recipeService.updateRecipe(response);
					this.editModal.close();
				},
				error: (error) => {
					this.errorHandlerService.handleError(error);
				},
			});
	}

	getAlimentsById(ids: number[]): AlimentModel[] {
		const result: AlimentModel[] = [];
		for (const aliment of this.aliments) {
			if (ids.includes(aliment.id)) {
				result.push(aliment);
			}
		}
		return result;
	}

	private getAllRecipesExcept(id: number): RecipeModel[] {
		const newRecipes: RecipeModel[] = [];
		for (const recipe of this.recipes) {
			if (recipe.id !== id) {
				newRecipes.push(recipe);
			}
		}
		return newRecipes;
	}
}
