import { Component, OnInit } from '@angular/core';
import { AlimentModel } from 'src/models/aliment.model';
import { ModalOpenerService } from '../services/modal-opener.service';
import { AlimentService } from '../services/aliment.service';
import { LongpollingService } from '../services/longpolling.service';

@Component({
	selector: 'app-aliments',
	templateUrl: './aliments.component.html',
	styleUrls: ['./aliments.component.scss'],
})
export class AlimentsComponent implements OnInit {
	aliments: AlimentModel[] = [];

	constructor(
		private modalOpener: ModalOpenerService,
		private alimentService: AlimentService,
		private longpollingService: LongpollingService
	) {
		this.alimentService.aliments$.subscribe((response) => {
			this.aliments = response;
		});
		this.longpollingService.longpolling$.subscribe((_response) => {
			this.alimentService.fetchAliments();
		});
		this.longpollingService.poll();
		this.alimentService.fetchAliments();
	}

	ngOnInit(): void {
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
