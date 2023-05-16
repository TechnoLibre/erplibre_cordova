import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlimentModel } from 'src/models/aliment.model';
import { ErplibreRestAlimentService } from './erplibre-rest-aliment.service';

@Injectable({
	providedIn: 'root',
})
export class AlimentService {
	private _aliments: AlimentModel[] = [];
	private aliments = new Subject<AlimentModel[]>();

	get aliments$(): Observable<AlimentModel[]> {
		return this.aliments.asObservable();
	}

	constructor(private erplibreRest: ErplibreRestAlimentService) {
		this.erplibreRest.getAliments().subscribe({
			next: (getResponse) => {
				this._aliments = getResponse;
				this.aliments.next(this._aliments);
			},
			error: (e) => {
				console.error(e);
			},
		});
	}

	getAliments() {
		this.aliments.next(this._aliments);
	}

	addAliment(aliment: AlimentModel) {
		this._aliments.push(aliment);
		this.aliments.next(this._aliments);
	}

	setAliments(aliments: AlimentModel[]) {
		this._aliments = aliments;
		this.aliments.next(this._aliments);
	}

	updateAliment(aliment: AlimentModel) {
		for (const i in this._aliments) {
			if (this._aliments[i].id === aliment.id) {
				this._aliments[i] = aliment;
				this.aliments.next(this._aliments);
				return;
			}
		}
	}
}
