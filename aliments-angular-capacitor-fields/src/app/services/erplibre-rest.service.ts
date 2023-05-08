import { Injectable } from '@angular/core';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { env } from '../../environments/environment';
import { Observable, Subject, from } from 'rxjs';
import { AlimentModel } from 'src/models/aliment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ErplibreRestService {
	MODEL = 'rest.aliment';

	constructor(private http: HttpClient) {}

	auth(): Observable<any> {
		const subject = new Subject();
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

	getAliments(): Observable<AlimentModel[]> {
		const subject = new Subject<AlimentModel[]>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				if (Capacitor.isNativePlatform()) {
					from(
						CapacitorHttp.get({
							url: `${env.apiUrl}/api/${this.MODEL}`,
							headers: {
								access_token: authResponse.data.access_token,
							},
						})
					).subscribe({
						next: (getResponse: any) => {
							const aliments: AlimentModel[] = [];
							for (const aliment of getResponse.data.data) {
								aliments.push(
									new AlimentModel(
										aliment.id,
										aliment.name,
										aliment.description,
										aliment.html
									)
								);
							}
							subject.next(aliments);
							subject.complete();
						},
					});
				} else {
					this.http
						.get(`/api/${this.MODEL}`, {
							headers: {
								access_token: authResponse.access_token,
							},
						})
						.subscribe((getResponse: any) => {
							const aliments: AlimentModel[] = [];
							for (const aliment of getResponse.data) {
								aliments.push(
									new AlimentModel(
										aliment.id,
										aliment.name,
										aliment.description,
										aliment.html
									)
								);
							}
							subject.next(aliments);
							subject.complete();
						});
				}
			},
			error: (e: any) => {
				console.error(e);
			},
		});
		return subject.asObservable();
	}

	addAliment(
		name: string,
		description: string,
		html: string
	): Observable<AlimentModel> {
		const subject = new Subject<AlimentModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				const alimentData = {
					name,
					description,
					html,
				};
				if (Capacitor.isNativePlatform()) {
					from(
						CapacitorHttp.post({
							url: `${env.apiUrl}/api/${this.MODEL}`,
							data: alimentData,
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.data.access_token,
							},
						})
					).subscribe({
						next: (postResponse: any) => {
							subject.next(
								new AlimentModel(
									postResponse.data.data[0].id,
									postResponse.data.data[0].name,
									postResponse.data.data[0].description,
									postResponse.data.data[0].html
								)
							);
							subject.complete();
						},
					});
				} else {
					this.http
						.post(`/api/${this.MODEL}`, alimentData, {
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.access_token,
							},
						})
						.subscribe({
							next: (postResponse: any) => {
								subject.next(
									new AlimentModel(
										postResponse.data[0].id,
										postResponse.data[0].name,
										postResponse.data[0].description,
										postResponse.data[0].html
									)
								);
								subject.complete();
							},
						});
				}
			},
			error: (e: any) => {
				console.error(e);
			},
		});
		return subject.asObservable();
	}

	deleteAliment(id: number): Observable<AlimentModel> {
		const subject = new Subject<AlimentModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				if (Capacitor.isNativePlatform()) {
					from(
						CapacitorHttp.delete({
							url: `${env.apiUrl}/api/${this.MODEL}/${id}`,
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.data.access_token,
							},
						})
					).subscribe({
						next: (deleteResponse: any) => {
							subject.next(deleteResponse.data.data);
							subject.complete();
						},
					});
				} else {
					this.http
						.delete(`/api/${this.MODEL}/${id}`, {
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.access_token,
							},
						})
						.subscribe({
							next: (deleteResponse: any) => {
								subject.next(deleteResponse.data);
								subject.complete();
							},
						});
				}
			},
			error: (e: any) => {
				console.error(e);
			},
		});
		return subject.asObservable();
	}

	updateAliment(
		id: number,
		newName: string,
		newDescription: string,
		newHtml: string
	): Observable<AlimentModel> {
		const subject = new Subject<AlimentModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				const newData = {
					name: newName,
					description: newDescription,
					html: newHtml,
				};
				if (Capacitor.isNativePlatform()) {
					from(
						CapacitorHttp.put({
							url: `${env.apiUrl}/api/${this.MODEL}/${id}`,
							data: newData,
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.data.access_token,
							},
						})
					).subscribe({
						next: (putResponse: any) => {
							subject.next(
								new AlimentModel(
									putResponse.data.data[0].id,
									putResponse.data.data[0].name,
									putResponse.data.data[0].description,
									putResponse.data.data[0].html
								)
							);
							subject.complete();
						},
					});
				} else {
					this.http
						.put(`/api/${this.MODEL}/${id}`, newData, {
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.access_token,
							},
						})
						.subscribe({
							next: (putResponse: any) => {
								subject.next(
									new AlimentModel(
										putResponse.data[0].id,
										putResponse.data[0].name,
										putResponse.data[0].description,
										putResponse.data[0].html
									)
								);
								subject.complete();
							},
						});
				}
			},
			error: (e: any) => {
				console.error(e);
			},
		});
		return subject.asObservable();
	}
}
