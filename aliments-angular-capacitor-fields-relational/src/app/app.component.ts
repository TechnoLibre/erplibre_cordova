import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Aliments';
	alimentsComponent!: AlimentsComponent;

	constructor(private router: Router) {}

	openAddModal() {
		const route = this.router.url.split('?')[0];
		switch (route) {
			case '/aliments':
				this.alimentsComponent.openAlimentAddModal();
				break;

			default:
				break;
		}
	}

	onRouterOutletActivate(event: any) {
		switch (event.constructor.name) {
			case 'AlimentsComponent':
				this.alimentsComponent = event;
				break;
			default:
				break;
		}
	}
}
