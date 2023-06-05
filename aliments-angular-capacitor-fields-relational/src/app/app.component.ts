import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AlimentModalsComponent } from './modals/aliment-modals/aliment-modals.component';
import { ModalOpenerService } from './services/modal-opener.service';
import { LongpollingService } from './services/longpolling.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Aliments';
	alimentsComponent!: AlimentsComponent;
	alimentModalsComponent!: AlimentModalsComponent;
	recipesComponent!: RecipesComponent;

	constructor(
		private router: Router,
		private modalOpener: ModalOpenerService
	) {}

	openAddModal() {
		const route = this.router.url.split('?')[0];
		switch (route) {
			case '/aliments':
				this.modalOpener.openAlimentModal(this.modalOpener.actions.add);
				break;
			case '/recipes':
				this.modalOpener.openRecipeModal(this.modalOpener.actions.add);
				break;
			default:
				break;
		}
	}

	onRouterOutletActivate(event: any) {
		if (event instanceof AlimentsComponent) {
			this.alimentsComponent = event;
		} else if (event instanceof RecipesComponent) {
			this.recipesComponent = event;
		}
	}
}
