import { Injectable } from '@angular/core';
import { AlimentModel } from 'src/models/aliment.model';

@Injectable({
	providedIn: 'root',
})
export class AlimentService {
	aliments: AlimentModel[] = [];

	constructor() {}
}
