import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentsComponent } from './aliments/aliments.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
	{ path: '', redirectTo: '/aliments', pathMatch: 'full' },
	{ path: 'aliments', component: AlimentsComponent },
	{ path: 'recipes', component: RecipesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
