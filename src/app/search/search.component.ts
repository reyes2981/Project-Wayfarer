import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cities: any = CITIES;
  weather: any;
  city: any ;
  country: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {     
    route.params.subscribe(val => {
      this.findWeather(this.city.name || '', this.city.country || '')    
    })
  }

  findWeather(name: string, country: string): void {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&APPID=a7c590ba9ef0beb2677f56440b4f04d6&&units=imperial`
      )
      .subscribe((response) => {
        this.weather = response;
      });
  }

  ngOnInit(): void {
    
    this.route.paramMap
    .subscribe(p => {
      this.city = CITIES.find(city => {  
        return city.name === (p.get('name') || '');       
      });
    });
    
    this.findWeather(this.city.name || '', this.city.country ||'');

  }
  

}
