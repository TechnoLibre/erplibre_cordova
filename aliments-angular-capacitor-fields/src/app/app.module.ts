import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ErplibreRestService } from './erplibre-rest.service';
import { DialogService } from './dialog.service';
import { ActionSheetService } from './action-sheet.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlimentAddComponent } from './aliment-add/aliment-add.component';

@NgModule({
	declarations: [AppComponent, AlimentAddComponent],
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
