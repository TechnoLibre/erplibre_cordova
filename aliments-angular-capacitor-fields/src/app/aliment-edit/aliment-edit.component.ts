import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlimentModel } from 'src/models/aliment.model';

@Component({
	selector: 'app-aliment-edit',
	templateUrl: './aliment-edit.component.html',
	styleUrls: ['./aliment-edit.component.scss'],
})
export class AlimentEditComponent {
	@Input() aliments: AlimentModel[] = [];
	alimentEditForm: FormGroup = this.formBuilder.group({
		name: '',
	});

	constructor(private formBuilder: FormBuilder) {}

	editAliment() {
		console.log('EDIT ALIMENT');
	}
}
