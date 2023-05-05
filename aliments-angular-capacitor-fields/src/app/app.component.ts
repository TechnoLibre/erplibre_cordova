import { Component, ViewChild } from '@angular/core';
import { ErplibreRestService } from './services/erplibre-rest.service';
import { DialogService } from './services/dialog.service';
import { AlimentModel } from 'src/models/aliment.model';
import { AlimentAddComponent } from './aliment-add/aliment-add.component';
import { AlimentOptionsComponent } from './aliment-options/aliment-options.component';
import { AlimentEditComponent } from './aliment-edit/aliment-edit.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Aliments';
	aliments: AlimentModel[] = [];
	@ViewChild(AlimentAddComponent) alimentAddComponent!: AlimentAddComponent;
	@ViewChild(AlimentOptionsComponent)
	alimentOptionsComponent!: AlimentOptionsComponent;
	@ViewChild(AlimentEditComponent)
	alimentEditComponent!: AlimentEditComponent;

	constructor(
		private erplibreRest: ErplibreRestService,
		private dialogService: DialogService
	) {}

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

	openAlimentOptionsModal(id: number) {
		this.alimentOptionsComponent.openModal(id);
	}

	openFormModal(data: { option: string; id: number }) {
		switch (data.option) {
			case 'edit':
				this.openAlimentEditModal(data.id);
				break;
			case 'delete':
				this.deleteAliment(data.id);
				break;
			default:
				break;
		}
	}

	deleteAliment(id: number) {
		const name = this.aliments.find((aliment) => aliment.id === id)?.name;
		this.dialogService
			.showConfirm(
				'Supprimer',
				`Voulez-vous vraiment supprimer l'aliment «${name}»?`
			)
			.subscribe((confirmResponse) => {
				if (confirmResponse.value) {
					this.erplibreRest.deleteAliment(id).subscribe({
						next: (deleteResponse: any) => {
							this.aliments = this.aliments.filter(
								(aliment) => aliment.id !== id
							);
						},
						error: (e: any) => {
							console.error(e);
						},
					});
				}
			});
	}
}
