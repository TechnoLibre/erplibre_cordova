import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlimentModel } from 'src/models/aliment.model';
import { RecipeModel } from 'src/models/recipe.model';

@Component({
	selector: 'app-recipe-info',
	templateUrl: './recipe-info.component.html',
	styleUrls: ['./recipe-info.component.scss'],
})
export class RecipeInfoComponent {
	@Input() recipes: RecipeModel[] = [];
	@Input() aliments: AlimentModel[] = [];
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	recipeId: number = 0;
	recipeInfoModal!: NgbModalRef;

	get recipe(): RecipeModel {
		return this.recipes.filter((recipe) => recipe.id === this.recipeId)[0];
	}

	constructor(private modalService: NgbModal) {}

	openModal(id: number) {
		this.recipeId = id;
		this.recipeInfoModal = this.modalService.open(this.templateRef);
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
}
