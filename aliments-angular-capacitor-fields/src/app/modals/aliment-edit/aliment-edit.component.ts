import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlimentModel } from 'src/models/aliment.model';
import { ErplibreRestService } from 'src/app/services/erplibre-rest.service';

@Component({
	selector: 'app-aliment-edit',
	templateUrl: './aliment-edit.component.html',
	styleUrls: ['./aliment-edit.component.scss'],
})
export class AlimentEditComponent {
	@Input() aliments: AlimentModel[] = [];
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	alimentEditForm: FormGroup = this.formBuilder.group({
		name: new FormControl('', [Validators.required]),
		description: new FormControl(''),
		html: new FormControl(''),
		date: new FormControl(null),
		datetime: new FormControl(null),
		int: new FormControl(null, Validators.pattern(/^[0-9]*$/)),
		float: new FormControl(
			null,
			Validators.pattern(/^([0-9]+|[0-9]+\.{1}[0-9]+)$/)
		),
		bool: new FormControl(false),
	});
	alimentEditModal!: NgbModalRef;
	alimentId: number = 0;

	get aliment(): AlimentModel {
		return this.aliments.filter(
			(aliment) => aliment.id === this.alimentId
		)[0];
	}

	get name() {
		return this.alimentEditForm.get('name');
	}

	get int() {
		return this.alimentEditForm.get('int');
	}

	get float() {
		return this.alimentEditForm.get('float');
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
		if (!this.alimentEditForm.valid) return;
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
