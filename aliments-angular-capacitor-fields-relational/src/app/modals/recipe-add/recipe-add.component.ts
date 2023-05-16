import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErplibreRestRecipeService } from 'src/app/services/erplibre-rest-recipe.service';
import { AlimentModel } from 'src/models/aliment.model';
import { RecipeModel } from 'src/models/recipe.model';

@Component({
	selector: 'app-recipe-add',
	templateUrl: './recipe-add.component.html',
	styleUrls: ['./recipe-add.component.scss'],
})
export class RecipeAddComponent {
	@Input() recipes: RecipeModel[] = [];
	@Input() aliments: AlimentModel[] = [];
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	recipeAddForm = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl(''),
		aliments: new FormControl([], Validators.required),
	});
	recipeAddModal!: NgbModalRef;
	recipeAddFormSubmitted = false;

	get formName() {
		return this.recipeAddForm.get('name');
	}

	get formAliments() {
		return this.recipeAddForm.get('aliments');
	}

	constructor(
		private modalService: NgbModal,
		private erplibreRestRecipeService: ErplibreRestRecipeService
	) {}

	openRecipeAddModal() {
		this.recipeAddModal = this.modalService.open(this.templateRef);
		this.recipeAddModal.closed.subscribe((_result) => {
			this.recipeAddFormSubmitted = false;
			this.recipeAddForm.reset();
		});
		this.recipeAddModal.dismissed.subscribe((_result) => {
			this.recipeAddFormSubmitted = false;
			this.recipeAddForm.reset();
		});
	}

	addRecipe() {
		/*
			Ceci est un hack. Puisque les modals de Bootstrap ne sont pas
			présents dans le DOM jusqu'à ce qu'on les fait apparaître, on est
			pas capable d'aller chercher la référence à l'élément <form> via
			ViewChild. Donc, pour vérifier si un formulaire est envoyé, on est
			obligé de créer un modal personnalisé qui est caché à la place
			d'inexistant dans le DOM, ou on crée une variable qui détermine si
			le formulaire a été envoyé ou non. Ceci nous permet de montrer la
			validation à l'envoi du formulaire.
		*/
		this.recipeAddFormSubmitted = true;

		if (this.recipeAddForm.invalid) return;
		const formValue = this.recipeAddForm.value;
		this.erplibreRestRecipeService
			.addRecipe(
				formValue.name!,
				formValue.description!,
				`[[6, 0, [${formValue.aliments}]]]`
			)
			.subscribe({
				next: (addResponse) => {
					this.recipeAddFormSubmitted = false;
					this.recipeAddModal.close();
					this.recipes.push(addResponse);
				},
				error: (e) => {
					console.error(e);
				},
			});
	}

	getAlimentsFromIds(ids: number[]): AlimentModel[] {
		return this.aliments.filter((aliment) => ids?.includes(aliment.id));
	}

	getOdooMany2ManyArray(ids: AlimentModel[]) {
		const result: any[] = [];
		for (const item of ids) {
			result.push([[4, 0, item]]);
		}
		return result;
	}
}
