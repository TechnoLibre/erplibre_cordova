import { Component, ViewChild } from '@angular/core';
import { AlimentModel } from 'src/models/aliment.model';
import { AlimentAddComponent } from 'src/app/modals/aliment-add/aliment-add.component';
import { AlimentOptionsComponent } from 'src/app/modals/aliment-options/aliment-options.component';
import { AlimentEditComponent } from 'src/app/modals/aliment-edit/aliment-edit.component';
import { AlimentDeleteComponent } from 'src/app/modals/aliment-delete/aliment-delete.component';
import { AlimentInfoComponent } from 'src/app/modals/aliment-info/aliment-info.component';
import { ErplibreRestService } from '../services/erplibre-rest.service';

@Component({
	selector: 'app-aliments',
	templateUrl: './aliments.component.html',
	styleUrls: ['./aliments.component.scss'],
})
export class AlimentsComponent {
	aliments: AlimentModel[] = [];
	@ViewChild(AlimentAddComponent) alimentAddComponent!: AlimentAddComponent;
	@ViewChild(AlimentOptionsComponent)
	alimentOptionsComponent!: AlimentOptionsComponent;
	@ViewChild(AlimentEditComponent)
	alimentEditComponent!: AlimentEditComponent;
	@ViewChild(AlimentDeleteComponent)
	alimentDeleteComponent!: AlimentDeleteComponent;
	@ViewChild(AlimentInfoComponent)
	alimentInfoComponent!: AlimentInfoComponent;

	constructor(private erplibreRest: ErplibreRestService) {}

	ngOnInit() {
		this.erplibreRest.getAliments().subscribe((response) => {
			this.aliments = response;
		});
	}

	openAlimentAddModal() {
		this.alimentAddComponent.openAlimentAddModal();
	}

	openAlimentEditModal(id: number) {
		this.alimentEditComponent.openModal(id);
	}

	openAlimentDeleteModal(id: number) {
		this.alimentDeleteComponent.openModal(id);
	}

	openAlimentOptionsModal(id: number) {
		this.alimentOptionsComponent.openModal(id);
	}

	openAlimentInfoModal(event: any, id: number) {
		if (event.target.className === 'aliment__options') {
			return;
		}
		this.alimentInfoComponent.openModal(id);
	}

	openFormModal(data: { option: string; id: number }) {
		switch (data.option) {
			case 'edit':
				this.openAlimentEditModal(data.id);
				break;
			case 'delete':
				this.openAlimentDeleteModal(data.id);
				break;
			default:
				break;
		}
	}
}
