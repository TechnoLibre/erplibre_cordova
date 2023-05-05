import {
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlimentModel } from 'src/models/aliment.model';
import { ErplibreRestService } from '../services/erplibre-rest.service';

@Component({
	selector: 'app-aliment-edit',
	templateUrl: './aliment-edit.component.html',
	styleUrls: ['./aliment-edit.component.scss'],
})
export class AlimentEditComponent {
	@Input() aliments: AlimentModel[] = [];
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	alimentEditForm: FormGroup = this.formBuilder.group({
		name: '',
	});
	alimentEditModal!: NgbModalRef;
	alimentId: number = 0;

	constructor(
		private formBuilder: FormBuilder,
		private modalService: NgbModal,
		private erplibreRest: ErplibreRestService
	) {}

	openModal(id: number) {
		this.alimentId = id;
		this.alimentEditModal = this.modalService.open(this.templateRef);
	}

	editAliment() {
		this.erplibreRest
			.updateAliment(this.alimentId, this.alimentEditForm.value.name)
			.subscribe({
				next: (response) => {
					this.setCurrentAliment(
						new AlimentModel(response.id, response.name)
					);
					this.alimentEditModal.close();
				},
				error: (e) => {
					console.log(e);
				},
			});
	}

	setCurrentAliment(newAliment: AlimentModel) {
		for (let i in this.aliments) {
			if (this.aliments[i].id === this.alimentId) {
				this.aliments[i] = newAliment;
			}
		}
	}

	getCurrentAliment() {
		return this.aliments.filter(
			(aliment) => aliment.id === this.alimentId
		)[0];
	}
}
