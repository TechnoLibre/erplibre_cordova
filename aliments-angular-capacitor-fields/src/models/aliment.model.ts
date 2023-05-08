import { Aliment } from './aliment.interface';

export class AlimentModel implements Aliment {
	id: number;
	name: string;
	description: string;
	html: string;
	date: Date;
	datetime: Date;

	constructor(
		id: number,
		name: string,
		description: string,
		html: string,
		date: Date,
		datetime: Date
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.html = html;
		this.date = date;
		this.datetime = datetime;
	}
}
