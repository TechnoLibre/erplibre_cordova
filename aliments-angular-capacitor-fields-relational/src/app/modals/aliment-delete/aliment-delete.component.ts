import {
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlimentModel } from 'src/models/aliment.model';
import { ErplibreRestService } from 'src/app/services/erplibre-rest.service';

@Component({
	selector: 'app-aliment-delete',
	templateUrl: './aliment-delete.component.html',
	styleUrls: ['./aliment-delete.component.scss'],
})
export class AlimentDeleteComponent {
	@Input() aliments: AlimentModel[] = [];
	@Output() alimentsChange = new EventEmitter<AlimentModel[]>();
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	alimentId: number = 0;
	alimentDeleteModal!: NgbModalRef;

	constructor(
		private modalService: NgbModal,
		private erplibreRest: ErplibreRestService
	) {}

	openModal(id: number) {
		this.alimentId = id;
		this.alimentDeleteModal = this.modalService.open(this.templateRef);
	}

	deleteAliment() {
		this.erplibreRest.deleteAliment(this.alimentId).subscribe({
			next: (_deleteResponse) => {
				const newAliments: AlimentModel[] = [];
				for (const aliment of this.aliments) {
					if (aliment.id !== this.alimentId) {
						newAliments.push(aliment);
					}
				}
				this.aliments = newAliments;
				this.alimentsChange.emit(newAliments);
				this.alimentDeleteModal.close();
			},
			error: (e) => {
				console.error(e);
			},
		});
	}

	getCurrentAliment() {
		return this.aliments.filter(
			(aliment) => aliment.id === this.alimentId
		)[0];
	}
}
