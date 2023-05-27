import { Injectable } from '@angular/core';
import { env } from 'src/environments/environment';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { Observable, Subject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
	providedIn: 'root',
})
export class LongpollingService {
	private last = 0;
	private _longpolling = new Subject<any>();
	private _connected = new Subject<boolean>();

	get longpolling$(): Observable<any> {
		return this._longpolling.asObservable();
	}

	get connected$(): Observable<boolean> {
		return this._connected.asObservable();
	}

	constructor(
		private http: HttpClient,
		private errorHandlerService: ErrorHandlerService
	) {}

	poll() {
		const headers = {
			'Content-Type': 'application/json',
		};
		const data = {
			jsonrpc: '2.0',
			method: 'call',
			params: {
				channels: ['rest.aliment'],
				last: this.last,
			},
		};
		this._connected.next(true);
		if (Capacitor.isNativePlatform()) {
			from(
				CapacitorHttp.post({
					url: `${env.apiUrl}/longpolling/poll`,
					headers,
					data: data,
				})
			).subscribe({
				next: (getResponse: any) => {
					if (getResponse.data?.result.length > 0) {
						this.last = getResponse.result[0].id;
						this._longpolling.next(getResponse);
					}
					this.poll();
				},
				error: (error) => {
					this._connected.next(false);
					this.errorHandlerService.handleError(error);
					setTimeout(() => {
						this.poll();
					}, 5150);
				},
			});
		} else {
			this.http
				.post(`/longpolling/poll`, data, {
					headers,
				})
				.subscribe({
					next: (getResponse: any) => {
						if (
							getResponse.result &&
							getResponse.result.length > 0
						) {
							this.last = getResponse.result[0].id;
							this._longpolling.next(getResponse);
						}
						this.poll();
					},
					error: (error) => {
						this._connected.next(false);
						this.errorHandlerService.handleError(error);
						setTimeout(() => {
							this.poll();
						}, 5150);
					},
				});
		}
	}
}
