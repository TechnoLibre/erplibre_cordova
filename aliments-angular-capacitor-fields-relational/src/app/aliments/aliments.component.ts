import { Component } from '@angular/core';
import { AlimentModel } from 'src/models/aliment.model';
import { ModalOpenerService } from '../services/modal-opener.service';
import { AlimentService } from '../services/aliment.service';

@Component({
	selector: 'app-aliments',
	templateUrl: './aliments.component.html',
	styleUrls: ['./aliments.component.scss'],
})
export class AlimentsComponent {
	aliments: AlimentModel[] = [];

	constructor(
		private modalOpener: ModalOpenerService,
		private alimentService: AlimentService
	) {
		this.alimentService.aliments$.subscribe((response) => {
			this.aliments = response;
		});
		this.alimentService.getAliments();
	}

	openAlimentOptionsModal(id: number) {
		this.modalOpener.openAlimentModal(this.modalOpener.actions.options, id);
	}

	openAlimentInfoModal(event: any, id: number) {
		if (event.target.className === 'aliment__options') {
			return;
		}
		this.modalOpener.openAlimentModal(this.modalOpener.actions.info, id);
	}
}
