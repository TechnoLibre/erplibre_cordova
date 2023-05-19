import { Component } from '@angular/core';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
	error: any = null;
	alertActivated = false;

	constructor(private errorHandlerService: ErrorHandlerService) {
		this.errorHandlerService.error$.subscribe((response) => {
			this.error = response;
			this.showAlert();
		});
	}

	showAlert(): void {
		this.alertActivated = true;
		setTimeout(() => {
			this.alertActivated = false;
		}, 5000);
	}

	closeAlert() {
		this.alertActivated = false;
	}
}
