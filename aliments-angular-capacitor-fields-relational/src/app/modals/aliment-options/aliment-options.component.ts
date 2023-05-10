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

@Component({
	selector: 'app-aliment-options',
	templateUrl: './aliment-options.component.html',
	styleUrls: ['./aliment-options.component.scss'],
})
export class AlimentOptionsComponent {
	@Input() aliments: AlimentModel[] = [];
	@Output() openFormModalEvent: EventEmitter<any> = new EventEmitter();
	@ViewChild('templateref') templateRef!: TemplateRef<any>;
	alimentId: number = 0;
	alimentOptionsModal!: NgbModalRef;

	constructor(private modalService: NgbModal) {}

	getCurrentAliment() {
		return this.aliments.filter(
			(aliment) => aliment.id === this.alimentId
		)[0];
	}

	openModal(id: number) {
		this.alimentId = id;
		this.alimentOptionsModal = this.modalService.open(this.templateRef);
	}

	openFormModal(data: { option: string; id: number }) {
		this.alimentOptionsModal.close();
		this.openFormModalEvent.emit(data);
	}

	editAliment() {
		this.openFormModal({ option: 'edit', id: this.alimentId });
	}

	deleteAliment() {
		this.openFormModal({ option: 'delete', id: this.alimentId });
	}
}
