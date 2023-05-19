import { Component } from '@angular/core';
import { LongpollingService } from '../services/longpolling.service';
import { AlimentService } from '../services/aliment.service';
import { RecipeService } from '../services/recipe.service';

@Component({
	selector: 'app-longpolling-connection-indicator',
	templateUrl: './longpolling-connection-indicator.component.html',
	styleUrls: ['./longpolling-connection-indicator.component.scss'],
})
export class LongpollingConnectionIndicatorComponent {
	connected = false;
	constructor(
		private longpollingService: LongpollingService,
		private alimentService: AlimentService,
		private recipeService: RecipeService
	) {
		this.longpollingService.connected$.subscribe((connected) => {
			if (connected && !this.connected) {
				this.alimentService.fetchAliments();
				this.recipeService.fetchRecipes();
			}
			this.connected = connected;
		});
	}
}
