import { Injectable } from '@angular/core';
import { CITIES } from './cities';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  cities: any = CITIES
  chosenCity: any;

  constructor() { }
}
