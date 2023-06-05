import { Aliment } from './aliment.interface';

export class AlimentModel implements Aliment {
	id: number;
	name: string;
	description: string;
	html: string;
	date: Date;
	datetime: Date;
	int: number;
	float: number;
	bool: boolean;

	constructor(
		id: number,
		name: string,
		description: string,
		html: string,
		date: Date,
		datetime: Date,
		int: number,
		float: number,
		bool: boolean
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.html = html;
		this.date = date;
		this.datetime = datetime;
		this.int = int;
		this.float = float;
		this.bool = bool;
	}
}
