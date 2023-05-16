import { Recipe } from './recipe.interface';

export class RecipeModel implements Recipe {
	id: number;
	name: string;
	description: string;
	aliments: any;

	constructor(id: number, name: string, description: string, aliments: any) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.aliments = aliments;
	}
}
