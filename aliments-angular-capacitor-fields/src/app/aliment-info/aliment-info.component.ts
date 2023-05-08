import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlimentModel } from 'src/models/aliment.model';

@Component({
	selector: 'app-aliment-info',
	templateUrl: './aliment-info.component.html',
	styleUrls: ['./aliment-info.component.scss'],
})
export class AlimentInfoComponent {
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	@Input() aliments: AlimentModel[] = [];
	alimentId: number = 0;
	alimentInfoModal!: NgbModalRef;

	get aliment(): AlimentModel {
		return this.aliments.filter(
			(aliment) => aliment.id === this.alimentId
		)[0];
	}

	get formattedDatetime() {
		if (!this.aliment.datetime) {
			return null;
		}
		const datetime = new Date(this.aliment.datetime);
		return datetime.toLocaleString();
	}

	constructor(private modalService: NgbModal) {}

	openModal(id: number) {
		this.alimentId = id;
		this.alimentInfoModal = this.modalService.open(this.templateRef, {
			scrollable: true,
		});
	}
}
