import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any = CITIES;
  city: any;
  constructor(private route: ActivatedRoute) {     
  }

  ngOnInit(): void {

  }

}
