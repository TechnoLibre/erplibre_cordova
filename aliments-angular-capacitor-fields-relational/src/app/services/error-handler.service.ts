import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ErrorHandlerService {
	private _error = new Subject<any>();
	messages = {
		authentication: "Erreur lors de l'authentification à ERPLibre.",
		aliments_get: "Erreur lors de l'obtention de la liste d'aliments.",
		aliment_add: "Erreur lors de l'ajout de l'aliment.",
		aliment_delete: "Erreur lors de la suppression de l'aliment.",
		aliment_update: "Erreur lors de la mise à jour de l'aliment.",
		recipes_get: "Erreur lors de l'obtention de la liste de recettes.",
		recipe_add: "Erreur lors de l'ajout de la recette.",
		recipe_delete: 'Erreur lors de la suppression de la recette.',
		recipe_update: 'Erreur lors de la mise à jour de la recette.',
	};

	get error$(): Observable<any> {
		return this._error.asObservable();
	}

	handleError(error: any, fallbackMessage: string = '') {
		let response = '';
		if (error.status === 500) {
			response = error.message || error.statusText || fallbackMessage;
		} else if (error.error === true) {
			response = error.data.message || fallbackMessage;
		} else if (error.error.message) {
			response = error.error.message || fallbackMessage;
		}
		this._error.next(response);
	}
}
