import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Aliments';
	alimentsComponent!: AlimentsComponent;
	recipesComponent!: RecipesComponent;
	routerActive: boolean = false;

	constructor(private router: Router) {}

	openAddModal() {
		const route = this.router.url.split('?')[0];
		switch (route) {
			case '/aliments':
				this.alimentsComponent.openAlimentAddModal();
				break;
			case '/recipes':
				this.recipesComponent.openRecipeAddModal();
				break;
			default:
				break;
		}
	}

	onRouterOutletActivate(event: any) {
		this.routerActive = true;
		switch (event.constructor.name) {
			case 'AlimentsComponent':
				this.alimentsComponent = event;
				break;
			case 'RecipesComponent':
				this.recipesComponent = event;
				break;
			default:
				break;
		}
	}
}
