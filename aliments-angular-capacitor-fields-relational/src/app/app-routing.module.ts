import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';

const routes: Routes = [{ path: 'aliments', component: AlimentsComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
