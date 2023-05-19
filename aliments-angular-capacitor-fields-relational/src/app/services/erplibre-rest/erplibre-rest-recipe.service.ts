import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './../error-handler.service';
import { ErplibreRestService } from './erplibre-rest.service';
import { Observable, Subject, from } from 'rxjs';
import { RecipeModel } from 'src/models/recipe.model';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { env } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ErplibreRestRecipeService extends ErplibreRestService {
	private MODEL = 'rest.recipe';

	constructor(
		protected override http: HttpClient,
		protected override errorHandlerService: ErrorHandlerService
	) {
		super(http, errorHandlerService);
	}

	getRecipes(): Observable<RecipeModel[]> {
		const subject = new Subject<RecipeModel[]>();
		this.auth().subscribe({
			next: (authResponse) => {
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
									this.errorHandlerService.messages
										.recipes_get
								);
								return;
							}
							const recipes: RecipeModel[] = [];
							for (const recipe of getResponse.data.data) {
								recipes.push(
									new RecipeModel(
										recipe.id,
										recipe.name,
										recipe.description,
										recipe.aliments
									)
								);
							}
							subject.next(recipes);
							subject.complete();
						},
						error: (error) => {
							this.errorHandlerService.handleError(
								error,
								this.errorHandlerService.messages.recipes_get
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
								const recipes: RecipeModel[] = [];
								for (const recipe of getResponse.data) {
									recipes.push(
										new RecipeModel(
											recipe.id,
											recipe.name,
											recipe.description,
											recipe.aliments
										)
									);
								}
								subject.next(recipes);
								subject.complete();
							},
							error: (error) => {
								this.errorHandlerService.handleError(
									error,
									this.errorHandlerService.messages
										.recipes_get
								);
							},
						});
				}
			},
			error: (error: any) => {
				this.errorHandlerService.handleError(
					error,
					this.errorHandlerService.messages.authentication
				);
			},
		});
		return subject.asObservable();
	}

	addRecipe(
		name: string,
		description: string,
		aliments: string
	): Observable<RecipeModel> {
		const subject = new Subject<RecipeModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				const recipeData = {
					name,
					description,
					__api__aliments: aliments,
				};
				if (Capacitor.isNativePlatform()) {
					from(
						CapacitorHttp.post({
							url: `${env.apiUrl}/api/${this.MODEL}`,
							data: recipeData,
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
									this.errorHandlerService.messages.recipe_add
								);
								return;
							}
							subject.next(
								new RecipeModel(
									postResponse.data.data[0].id,
									postResponse.data.data[0].name,
									postResponse.data.data[0].description,
									postResponse.data.data[0].aliments
								)
							);
							subject.complete();
						},
						error: (error: any) => {
							this.errorHandlerService.handleError(
								error,
								this.errorHandlerService.messages.recipe_add
							);
						},
					});
				} else {
					this.http
						.post(`/api/${this.MODEL}`, recipeData, {
							headers: {
								'Content-Type': 'application/jsonp',
								access_token: authResponse.access_token,
							},
						})
						.subscribe({
							next: (postResponse: any) => {
								subject.next(
									new RecipeModel(
										postResponse.data[0].id,
										postResponse.data[0].name,
										postResponse.data[0].description,
										postResponse.data[0].aliments
									)
								);
								subject.complete();
							},
							error: (error: any) => {
								this.errorHandlerService.handleError(
									error,
									this.errorHandlerService.messages.recipe_add
								);
							},
						});
				}
			},
			error: (error: any) => {
				this.errorHandlerService.handleError(
					error,
					this.errorHandlerService.messages.authentication
				);
			},
		});
		return subject.asObservable();
	}

	deleteRecipe(id: number): Observable<RecipeModel> {
		const subject = new Subject<RecipeModel>();
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
									this.errorHandlerService.messages
										.recipe_delete
								);
								return;
							}
							subject.next(deleteResponse.data.data);
							subject.complete();
						},
						error: (error) => {
							this.errorHandlerService.handleError(
								error,
								this.errorHandlerService.messages.recipe_delete
							);
							return;
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
							error: (error) => {
								this.errorHandlerService.handleError(
									error,
									this.errorHandlerService.messages
										.recipe_delete
								);
								return;
							},
						});
				}
			},
			error: (error) => {
				this.errorHandlerService.handleError(
					error,
					this.errorHandlerService.messages.authentication
				);
				return;
			},
		});
		return subject.asObservable();
	}

	updateRecipe(
		id: number,
		newName: string,
		newDescription: string,
		newAliments: string
	): Observable<RecipeModel> {
		const subject = new Subject<RecipeModel>();
		this.auth().subscribe({
			next: (authResponse: any) => {
				const newData = {
					name: newName,
					description: newDescription,
					__api__aliments: newAliments,
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
									this.errorHandlerService.messages
										.recipe_update
								);
								return;
							}
							subject.next(
								new RecipeModel(
									putResponse.data.data[0].id,
									putResponse.data.data[0].name,
									putResponse.data.data[0].description,
									putResponse.data.data[0].aliments
								)
							);
							subject.complete();
						},
						error: (error) => {
							this.errorHandlerService.handleError(
								error,
								this.errorHandlerService.messages.recipe_update
							);
							return;
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
									new RecipeModel(
										putResponse.data[0].id,
										putResponse.data[0].name,
										putResponse.data[0].description,
										putResponse.data[0].aliments
									)
								);
								subject.complete();
							},
							error: (error) => {
								this.errorHandlerService.handleError(
									error,
									this.errorHandlerService.messages
										.recipe_update
								);
								return;
							},
						});
				}
			},
			error: (error) => {
				this.errorHandlerService.handleError(
					error,
					this.errorHandlerService.messages.authentication
				);
				return;
			},
		});
		return subject.asObservable();
	}
}
