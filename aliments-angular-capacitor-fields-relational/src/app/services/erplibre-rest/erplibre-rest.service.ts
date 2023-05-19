import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { Observable, Subject, from } from 'rxjs';
import { env } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ErplibreRestService {
	private token: string = '';

	constructor(protected http: HttpClient) {}

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
				next: (v) => {
					subject.next(v);
					subject.complete();
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
				.subscribe((response) => {
					subject.next(response);
					subject.complete();
				});
		}
		return subject.asObservable();
	}
}
