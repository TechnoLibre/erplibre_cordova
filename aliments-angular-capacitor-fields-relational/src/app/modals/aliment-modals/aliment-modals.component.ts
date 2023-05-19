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
import { ErplibreRestAlimentService } from 'src/app/services/erplibre-rest/erplibre-rest-aliment.service';
import { ModalOpenerService } from 'src/app/services/modal-opener.service';
import { AlimentModel } from 'src/models/aliment.model';

@Component({
	selector: 'app-aliment-modals',
	templateUrl: './aliment-modals.component.html',
	styleUrls: ['./aliment-modals.component.scss'],
})
export class AlimentModalsComponent {
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
		name: new FormControl('', [Validators.required]),
		description: new FormControl(''),
		html: new FormControl(''),
		date: new FormControl(null),
		datetime: new FormControl(null),
		int: new FormControl(null, [Validators.pattern(/^[0-9]*$/)]),
		float: new FormControl(null, [
			Validators.pattern(/^([0-9]+|[0-9]+\.{1}[0-9]+)$/),
		]),
		bool: new FormControl(false),
	});

	editFormGroup: FormGroup = this.formBuilder.group({
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

	get addName() {
		return this.addFormGroup.get('name');
	}

	get addInt() {
		return this.addFormGroup.get('int');
	}

	get addFloat() {
		return this.addFormGroup.get('float');
	}

	get editName() {
		return this.editFormGroup.get('name');
	}

	get editInt() {
		return this.editFormGroup.get('int');
	}

	addFormSubmitted = false;
	editFormSubmitted = false;
	currentAlimentId = 0;

	get editFloat() {
		return this.editFormGroup.get('float');
	}

	get currentAliment(): AlimentModel {
		return this.aliments.filter(
			(aliment) => aliment.id === this.currentAlimentId
		)[0];
	}

	set currentAliment(newAliment: AlimentModel) {
		for (let i in this.aliments) {
			if (this.aliments[i].id === this.currentAlimentId) {
				this.aliments[i] = newAliment;
			}
		}
	}

	get formattedDatetime() {
		if (!this.currentAliment.datetime) {
			return null;
		}
		const datetime = new Date(this.currentAliment.datetime);
		return datetime.toLocaleString();
	}

	constructor(
		private errorHandlerService: ErrorHandlerService,
		private alimentService: AlimentService,
		private formBuilder: FormBuilder,
		private modalService: NgbModal,
		private erplibreRest: ErplibreRestAlimentService,
		private modalOpener: ModalOpenerService
	) {
		this.alimentService.aliments$.subscribe((response) => {
			this.aliments = response;
		});
		this.modalOpener.alimentModalOpener$.subscribe({
			next: (response) => {
				switch (response.action) {
					case this.modalOpener.actions.add:
						this.openAddModal();
						break;
					case this.modalOpener.actions.edit:
						if (response.id) {
							this.openEditModal(response.id);
						}
						break;
					case this.modalOpener.actions.options:
						if (response.id) {
							this.openOptionsModal(response.id);
						}
						break;
					case this.modalOpener.actions.info:
						if (response.id) {
							this.openInfoModal(response.id);
						}
						break;
				}
			},
			error: (error) => {
				this.errorHandlerService.handleError(error);
			},
		});
	}

	openAddModal(): void {
		this.addModal = this.modalService.open(this.addModalTemplate, {
			scrollable: true,
		});
		this.addModal.closed.subscribe((_result) => {
			this.addFormSubmitted = false;
			this.addFormGroup.reset();
		});
		this.addModal.dismissed.subscribe((_result) => {
			this.addFormSubmitted = false;
			this.addFormGroup.reset();
		});
	}

	openEditModal(id: number): void {
		if (this.optionsModal) {
			this.optionsModal.close();
		}
		this.currentAlimentId = id;
		this.editModal = this.modalService.open(this.editModalTemplate, {
			scrollable: true,
		});
		this.editFormGroup.patchValue({
			name: this.currentAliment.name,
			description: this.currentAliment.description,
			html: this.currentAliment.html,
			date: this.currentAliment.date,
			datetime: this.currentAliment.datetime,
			int: this.currentAliment.int,
			float: this.currentAliment.float,
			bool: this.currentAliment.bool,
		});
	}

	openDeleteModal(id: number): void {
		if (this.optionsModal) {
			this.optionsModal.close();
		}
		this.optionsModal.close();
		this.currentAlimentId = id;
		this.deleteModal = this.modalService.open(this.deleteModalTemplate);
	}

	openOptionsModal(id: number): void {
		this.currentAlimentId = id;
		this.optionsModal = this.modalService.open(this.optionsModalTemplate);
	}

	openInfoModal(id: number): void {
		this.currentAlimentId = id;
		this.infoModal = this.modalService.open(this.infoModalTemplate, {
			scrollable: true,
		});
	}

	addAliment(): void {
		this.addFormSubmitted = true;
		if (this.addFormGroup.invalid) return;
		const formValue = this.addFormGroup.value;
		this.erplibreRest
			.addAliment(
				formValue.name!,
				formValue.description!,
				formValue.html!,
				formValue.date!,
				formValue.datetime!,
				formValue.int!,
				formValue.float!,
				formValue.bool!
			)
			.subscribe({
				next: (addResponse: AlimentModel) => {
					this.addModal.close();
					this.alimentService.addAliment(addResponse);
				},
				error: (error) => {
					this.errorHandlerService.handleError(error);
				},
			});
	}

	editAliment(): void {
		this.editFormSubmitted = true;
		if (this.editFormGroup.invalid) return;
		this.erplibreRest
			.updateAliment(
				this.currentAlimentId,
				this.editFormGroup.value.name,
				this.editFormGroup.value.description,
				this.editFormGroup.value.html,
				this.editFormGroup.value.date,
				this.editFormGroup.value.datetime,
				this.editFormGroup.value.int,
				this.editFormGroup.value.float,
				this.editFormGroup.value.bool
			)
			.subscribe({
				next: (updateResponse) => {
					this.alimentService.updateAliment(updateResponse);
					this.editModal.close();
				},
				error: (error) => {
					this.errorHandlerService.handleError(error);
				},
			});
	}

	deleteAliment(): void {
		this.erplibreRest.deleteAliment(this.currentAlimentId).subscribe({
			next: (_deleteResponse) => {
				this.alimentService.setAliments(
					this.getAllAlimentsExcept(this.currentAlimentId)
				);
				this.deleteModal.close();
			},
			error: (error) => {
				this.errorHandlerService.handleError(error);
			},
		});
	}

	private getAllAlimentsExcept(id: number): AlimentModel[] {
		const newAliments: AlimentModel[] = [];
		for (const aliment of this.aliments) {
			if (aliment.id !== id) {
				newAliments.push(aliment);
			}
		}
		return newAliments;
	}
}
