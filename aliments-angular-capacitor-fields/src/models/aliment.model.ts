import { Aliment } from './aliment.interface';

export class AlimentModel implements Aliment {
	id: number;
	name: string;
	description: string;
	html: string;

	constructor(id: number, name: string, description: string, html: string) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.html = html;
	}
}
