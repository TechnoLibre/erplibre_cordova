import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
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
		description: '',
		html: '',
		date: new Date(),
		datetime: new Date(),
		int: null,
		float: null,
		bool: null,
	});
	alimentEditModal!: NgbModalRef;
	alimentId: number = 0;

	get aliment(): AlimentModel {
		return this.aliments.filter(
			(aliment) => aliment.id === this.alimentId
		)[0];
	}

	set aliment(newAliment: AlimentModel) {
		for (let i in this.aliments) {
			if (this.aliments[i].id === this.alimentId) {
				this.aliments[i] = newAliment;
			}
		}
	}

	constructor(
		private formBuilder: FormBuilder,
		private modalService: NgbModal,
		private erplibreRest: ErplibreRestService
	) {}

	openModal(id: number) {
		this.alimentId = id;
		this.alimentEditModal = this.modalService.open(this.templateRef, {
			scrollable: true,
		});
		const currentAliment = this.aliment;
		this.alimentEditForm.patchValue({
			name: currentAliment.name || '',
			description: currentAliment.description || '',
			html: currentAliment.html || '',
			date: currentAliment.date || '',
			datetime: currentAliment.datetime || '',
			int: currentAliment.int || '',
			float: currentAliment.float || '',
			bool: currentAliment.bool || '',
		});
	}

	editAliment() {
		this.erplibreRest
			.updateAliment(
				this.alimentId,
				this.alimentEditForm.value.name,
				this.alimentEditForm.value.description,
				this.alimentEditForm.value.html,
				this.alimentEditForm.value.date,
				this.alimentEditForm.value.datetime,
				this.alimentEditForm.value.int,
				this.alimentEditForm.value.float,
				this.alimentEditForm.value.bool
			)
			.subscribe({
				next: (response) => {
					this.aliment = new AlimentModel(
						response.id,
						response.name,
						response.description,
						response.html,
						response.date,
						response.datetime,
						response.int,
						response.float,
						response.bool
					);
					this.alimentEditModal.close();
				},
				error: (e) => {
					console.error(e);
				},
			});
	}
}
