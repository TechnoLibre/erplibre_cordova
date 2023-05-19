import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ModalOpenerService {
	private _alimentModalOpener = new Subject<any>();
	private _recipeModalOpener = new Subject<any>();

	actions = {
		add: 0,
		delete: 1,
		edit: 2,
		info: 3,
		options: 4,
	};

	get alimentModalOpener$(): Observable<any> {
		return this._alimentModalOpener.asObservable();
	}

	get recipeModalOpener$(): Observable<any> {
		return this._recipeModalOpener.asObservable();
	}

	openAlimentModal(action: number, id: number = 0) {
		if (!Object.values(this.actions).includes(action)) {
			return;
		}
		this._alimentModalOpener.next({ action, id });
	}

	openRecipeModal(action: number, id: number = 0) {
		if (!Object.values(this.actions).includes(action)) {
			return;
		}
		this._recipeModalOpener.next({ action, id });
	}
}
