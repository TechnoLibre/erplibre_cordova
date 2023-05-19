import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ErrorHandlerService {
	private _error = new Subject<any>();

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
