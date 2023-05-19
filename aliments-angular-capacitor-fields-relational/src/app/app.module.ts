import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ErplibreRestAlimentService } from './services/erplibre-rest/erplibre-rest-aliment.service';
import { ErplibreRestRecipeService } from './services/erplibre-rest/erplibre-rest-recipe.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlimentsComponent } from './aliments/aliments.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AlimentModalsComponent } from './modals/aliment-modals/aliment-modals.component';
import { AlimentService } from './services/aliment.service';
import { RecipeService } from './services/recipe.service';
import { ModalOpenerService } from './services/modal-opener.service';
import { RecipeModalsComponent } from './modals/recipe-modals/recipe-modals.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
	declarations: [
		AppComponent,
		AlimentsComponent,
		RecipesComponent,
		AlimentModalsComponent,
		RecipeModalsComponent,
		ErrorMessageComponent,
	],
	imports: [
		BrowserModule,
		NgbModalModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		ErrorHandlerService,
		ErplibreRestAlimentService,
		ErplibreRestRecipeService,
		AlimentService,
		RecipeService,
		ModalOpenerService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
