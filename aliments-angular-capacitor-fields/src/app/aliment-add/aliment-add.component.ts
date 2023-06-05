import {
	Component,
	ElementRef,
	Input,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { ErplibreRestService } from '../services/erplibre-rest.service';
import { AlimentModel } from 'src/models/aliment.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
	alimentAddModal!: NgbModalRef;

	get name() {
		return this.alimentAddForm.get('name');
	}

	get int() {
		return this.alimentAddForm.get('int');
	}

	get float() {
		return this.alimentAddForm.get('float');
	}

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
		if (!this.alimentAddForm.valid) return;
		const formValue = this.alimentAddForm.value;
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
					this.alimentAddModal.close();
					this.aliments.push(addResponse);
				},
				error: (e) => {
					console.error(e);
				},
			});
	}
}
