import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { Observable, Subject, from } from 'rxjs';
import { env } from 'src/environments/environment';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
	providedIn: 'root',
})
export class ErplibreRestService {
	private token: string = '';

	constructor(
		protected http: HttpClient,
		protected errorHandlerService: ErrorHandlerService
	) {}

	auth(): Observable<any> {
		const subject = new Subject();

		if (this.token) {
			if (Capacitor.isNativePlatform()) {
				subject.next({ data: { access_token: this.token } });
			} else {
				subject.next({ access_token: this.token });
			}
			subject.complete();
			return subject.asObservable();
		}

		if (Capacitor.isNativePlatform()) {
			from(
				CapacitorHttp.get({
					url: `${env.apiUrl}/api/auth/token`,
					params: {
						db: 'test_rhuard_demo_full',
						login: 'admin',
						password: 'admin',
					},
				})
			).subscribe({
				next: (getResponse: any) => {
					if (getResponse.error) {
						this.errorHandlerService.handleError(
							getResponse,
							this.errorHandlerService.messages.authentication
						);
					}
					subject.next(getResponse);
					subject.complete();
				},
				error: (error) => {
					this.errorHandlerService.handleError(
						error,
						this.errorHandlerService.messages.authentication
					);
				},
			});
		} else {
			this.http
				.get('/api/auth/token', {
					params: {
						db: 'test_rhuard_demo_full',
						login: 'admin',
						password: 'admin',
					},
				})
				.subscribe({
					next: (getResponse) => {
						subject.next(getResponse);
						subject.complete();
					},
					error: (error) => {
						this.errorHandlerService.handleError(
							error,
							this.errorHandlerService.messages.authentication
						);
					},
				});
		}
		return subject.asObservable();
	}
}
