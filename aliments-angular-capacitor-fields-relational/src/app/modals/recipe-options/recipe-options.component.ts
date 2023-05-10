import {
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RecipeModel } from 'src/models/recipe.model';

@Component({
	selector: 'app-recipe-options',
	templateUrl: './recipe-options.component.html',
	styleUrls: ['./recipe-options.component.scss'],
})
export class RecipeOptionsComponent {
	@Input() recipes: RecipeModel[] = [];
	@Output() openFormModalEvent: EventEmitter<any> = new EventEmitter();
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	recipeId: number = 0;
	recipeOptionsModal!: NgbModalRef;

	constructor(private modalService: NgbModal) {}

	getCurrentRecipe() {
		return this.recipes.filter((recipe) => recipe.id === this.recipeId)[0];
	}

	openModal(id: number) {
		this.recipeId = id;
		this.recipeOptionsModal = this.modalService.open(this.templateRef);
	}

	openFormModal(data: { option: string; id: number }) {
		this.recipeOptionsModal.close();
		this.openFormModalEvent.emit(data);
	}

	editRecipe() {
		this.openFormModal({ option: 'edit', id: this.recipeId });
	}

	deleteRecipe() {
		this.openFormModal({ option: 'delete', id: this.recipeId });
	}
}
