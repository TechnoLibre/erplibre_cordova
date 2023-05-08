import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ErplibreRestService } from '../services/erplibre-rest.service';
import { AlimentModel } from 'src/models/aliment.model';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-aliment-add',
	templateUrl: './aliment-add.component.html',
	styleUrls: ['./aliment-add.component.scss'],
})
export class AlimentAddComponent {
	@Input() aliments: AlimentModel[] = [];
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	alimentAddForm = this.formBuilder.group({
		name: '',
		description: '',
		html: '',
		date: new Date(),
		datetime: new Date(),
	});
	alimentAddModal!: NgbModalRef;

	constructor(
		private erplibreRest: ErplibreRestService,
		private formBuilder: FormBuilder,
		private modalService: NgbModal
	) {}

	openAlimentAddModal() {
		this.alimentAddModal = this.modalService.open(this.templateRef, {
			scrollable: true,
		});
		this.alimentAddModal.closed.subscribe((_result) => {
			this.alimentAddForm.reset();
		});
	}

	addAliment() {
		const formValue = this.alimentAddForm.value;
		if (
			formValue.name &&
			formValue.description &&
			formValue.html &&
			formValue.date &&
			formValue.datetime
		) {
			this.erplibreRest
				.addAliment(
					formValue.name,
					formValue.description,
					formValue.html,
					formValue.date,
					formValue.datetime
				)
				.subscribe({
					next: (addResponse: AlimentModel) => {
						this.alimentAddModal.close();
						this.aliments.push(addResponse);
					},
					error: (e) => {
						console.error(e);
					},
				});
		}
	}
}
