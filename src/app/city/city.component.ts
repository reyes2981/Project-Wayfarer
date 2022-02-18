import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any = CITIES;
  weather: any;
  city: any;
  title: any;
  author: any;
  post: any;
  zip: any;
  country: any;
  addedList: any[] =Array();
  constructor(private route: ActivatedRoute, private http: HttpClient) {     
  }

  findWeather(name: string, country: string): void {
    this.http
      .get(
        // `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`
        `https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&APPID=a7c590ba9ef0beb2677f56440b4f04d6&&units=imperial`
      )
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
      });
  }

  addForm(title: string, author: string, post: string){
    this.addedList.push(title);
    this.addedList.push(author);
    this.addedList.push(post);

  }


  ngOnInit(): void {
    
    this.route.paramMap
    .subscribe(p => {
      this.city = CITIES.find(city => {  
        return city.id === parseInt(p.get('id') || '', 10);       
      });
    });
    this.findWeather(this.city.name, this.city.country);
  }
  

}
