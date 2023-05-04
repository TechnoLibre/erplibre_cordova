import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ErplibreRestService } from './services/erplibre-rest.service';
import { DialogService } from './services/dialog.service';
import { ActionSheetService } from './services/action-sheet.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlimentAddComponent } from './aliment-add/aliment-add.component';
import { AlimentEditComponent } from './aliment-edit/aliment-edit.component';

@NgModule({
	declarations: [AppComponent, AlimentAddComponent, AlimentEditComponent],
	imports: [
		BrowserModule,
		NgbModalModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [ErplibreRestService, DialogService, ActionSheetService],
	bootstrap: [AppComponent],
})
export class AppModule {}
