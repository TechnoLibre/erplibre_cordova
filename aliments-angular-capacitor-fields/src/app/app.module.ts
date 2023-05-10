import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ErplibreRestService } from './services/erplibre-rest.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlimentAddComponent } from './modals/aliment-add/aliment-add.component';
import { AlimentEditComponent } from './modals/aliment-edit/aliment-edit.component';
import { AlimentOptionsComponent } from './modals/aliment-options/aliment-options.component';
import { AlimentDeleteComponent } from './modals/aliment-delete/aliment-delete.component';
import { AlimentInfoComponent } from './modals/aliment-info/aliment-info.component';

@NgModule({
	declarations: [
		AppComponent,
		AlimentAddComponent,
		AlimentEditComponent,
		AlimentOptionsComponent,
		AlimentDeleteComponent,
		AlimentInfoComponent,
	],
	imports: [
		BrowserModule,
		NgbModalModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [ErplibreRestService],
	bootstrap: [AppComponent],
})
export class AppModule {}
