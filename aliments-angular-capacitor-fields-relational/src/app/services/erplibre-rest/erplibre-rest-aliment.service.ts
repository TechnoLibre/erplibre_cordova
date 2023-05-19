import { Injectable } from '@angular/core';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { env } from 'src/environments/environment';
import { Observable, Subject, from } from 'rxjs';
import { AlimentModel } from 'src/models/aliment.model';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from './../error-handler.service';
import { ErplibreRestService } from './erplibre-rest.service';

@Injectable({
	providedIn: 'root',
})
export class ErplibreRestAlimentService extends ErplibreRestService {
	private MODEL = 'rest.aliment';

	constructor(
		private errorHandlerService: ErrorHandlerService,
		protected override http: HttpClient
	) {
		super(http);
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
							if (getResponse.error) {
								this.errorHandlerService.handleError(
									getResponse,
									"Erreur lors de l'obtention de la liste d'aliments."
								);
								return;
							}
							const aliments: AlimentModel[] = [];
							for (const aliment of getResponse.data.data) {
								aliments.push(
									new AlimentModel(
										aliment.id,
										aliment.name,
										aliment.description,
										aliment.html,
										aliment.date,
										aliment.datetime,
										aliment.int,
										aliment.float,
										aliment.bool
									)
								);
							}
							subject.next(aliments);
							subject.complete();
						},
						error: (error) => {
							this.errorHandlerService.handleError(
								error,
								"Erreur lors de l'obtention de la liste d'aliments."
							);
						},
					});
				} else {
					this.http
						.get(`/api/${this.MODEL}`, {
							headers: {
								access_token: authResponse.access_token,
							},
						})
						.subscribe({
							next: (getResponse: any) => {
								const aliments: AlimentModel[] = [];
								for (const aliment of getResponse.data) {
									aliments.push(
										new AlimentModel(
											aliment.id,
											aliment.name,
											aliment.description,
											aliment.html,
											aliment.date,
											aliment.datetime,
											aliment.int,
											aliment.float,
											aliment.bool
										)
									);
								}
								subject.next(aliments);
								subject.complete();
							},
							error: (error) => {
								this.errorHandlerService.handleError(
									error,
									"Erreur lors de l'obtention de la liste d'aliments."
								);
							},
						});
				}
			},
			error: (error: any) => {
				this.errorHandlerService.handleError(
					error,
					"Erreur lors de l'obtention de la liste d'aliments."
				);
			},
		});
		return subject.asObservable();
	}

	addAliment(
		name: string,
		description: string,
		html: string,
		date: Date,
		datetime: Date,
		int: number,
		float: number,
		bool: boolean
	): Observable<AlimentModel> {
		const subject = new Subject<AlimentModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				const alimentData = {
					name,
					description,
					html,
					date,
					datetime,
					int,
					float,
					bool,
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
							if (postResponse.error) {
								this.errorHandlerService.handleError(
									postResponse,
									"Erreur lors de l'ajout de l'aliment."
								);
								return;
							}
							subject.next(
								new AlimentModel(
									postResponse.data.data[0].id,
									postResponse.data.data[0].name,
									postResponse.data.data[0].description,
									postResponse.data.data[0].html,
									postResponse.data.data[0].date,
									postResponse.data.data[0].datetime,
									postResponse.data.data[0].int,
									postResponse.data.data[0].float,
									postResponse.data.data[0].bool
								)
							);
							subject.complete();
						},
						error: (error: any) => {
							this.errorHandlerService.handleError(
								error,
								"Erreur lors de l'ajout de l'aliment."
							);
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
										postResponse.data[0].html,
										postResponse.data[0].date,
										postResponse.data[0].datetime,
										postResponse.data[0].int,
										postResponse.data[0].float,
										postResponse.data[0].bool
									)
								);
								subject.complete();
							},
							error: (error: any) => {
								this.errorHandlerService.handleError(
									error,
									"Erreur lors de l'ajout de l'aliment."
								);
							},
						});
				}
			},
			error: (error: any) => {
				this.errorHandlerService.handleError(
					error,
					"Erreur lors de l'ajout de l'aliment."
				);
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
							if (deleteResponse.error) {
								this.errorHandlerService.handleError(
									deleteResponse,
									"Erreur lors de la suppression de l'aliment."
								);
								return;
							}
							subject.next(deleteResponse.data.data);
							subject.complete();
						},
						error: (error: any) => {
							this.errorHandlerService.handleError(
								error,
								"Erreur lors de la suppression de l'aliment."
							);
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
							error: (error: any) => {
								this.errorHandlerService.handleError(
									error,
									"Erreur lors de la suppression de l'aliment."
								);
							},
						});
				}
			},
			error: (error: any) => {
				this.errorHandlerService.handleError(
					error,
					"Erreur lors de la suppression de l'aliment."
				);
			},
		});
		return subject.asObservable();
	}

	updateAliment(
		id: number,
		newName: string,
		newDescription: string,
		newHtml: string,
		newDate: Date,
		newDatetime: Date,
		newInt: number,
		newFloat: number,
		newBool: boolean
	): Observable<AlimentModel> {
		const subject = new Subject<AlimentModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				const newData = {
					name: newName,
					description: newDescription,
					html: newHtml,
					date: newDate,
					datetime: newDatetime,
					int: newInt,
					float: newFloat,
					bool: newBool,
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
							if (putResponse.error) {
								this.errorHandlerService.handleError(
									putResponse,
									"Erreur lors de la mise à jour de l'aliment."
								);
								return;
							}
							subject.next(
								new AlimentModel(
									putResponse.data.data[0].id,
									putResponse.data.data[0].name,
									putResponse.data.data[0].description,
									putResponse.data.data[0].html,
									putResponse.data.data[0].date,
									putResponse.data.data[0].datetime,
									putResponse.data.data[0].int,
									putResponse.data.data[0].float,
									putResponse.data.data[0].bool
								)
							);
							subject.complete();
						},
						error: (error: any) => {
							this.errorHandlerService.handleError(
								error,
								"Erreur lors de la mise à jour de l'aliment."
							);
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
										putResponse.data[0].html,
										putResponse.data[0].date,
										putResponse.data[0].datetime,
										putResponse.data[0].int,
										putResponse.data[0].float,
										putResponse.data[0].bool
									)
								);
								subject.complete();
							},
							error: (error: any) => {
								this.errorHandlerService.handleError(
									error,
									"Erreur lors de la mise à jour de l'aliment."
								);
							},
						});
				}
			},
			error: (error: any) => {
				this.errorHandlerService.handleError(
					error,
					"Erreur lors de la mise à jour de l'aliment."
				);
			},
		});
		return subject.asObservable();
	}
}
