import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ErplibreRestAlimentService } from './services/erplibre-rest-aliment.service';
import { ErplibreRestRecipeService } from './services/erplibre-rest-recipe.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlimentAddComponent } from './modals/aliment-add/aliment-add.component';
import { AlimentEditComponent } from './modals/aliment-edit/aliment-edit.component';
import { AlimentOptionsComponent } from './modals/aliment-options/aliment-options.component';
import { AlimentDeleteComponent } from './modals/aliment-delete/aliment-delete.component';
import { AlimentInfoComponent } from './modals/aliment-info/aliment-info.component';
import { AlimentsComponent } from './aliments/aliments.component';

@NgModule({
	declarations: [
		AppComponent,
		AlimentAddComponent,
		AlimentEditComponent,
		AlimentOptionsComponent,
		AlimentDeleteComponent,
		AlimentInfoComponent,
		AlimentsComponent,
	],
	imports: [
		BrowserModule,
		NgbModalModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [ErplibreRestAlimentService, ErplibreRestRecipeService],
	bootstrap: [AppComponent],
})
export class AppModule {}
