import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any = CITIES;
  weather: any;
  city: any;
  country: any;
  // addedList: any[] =Array();
  


   submit(form: any){
    console.log(form)
    form.id=this.city.posts.length+1
    this.city.posts.push(form);
    console.log(this.city.posts)

  }

  //Weather wasn't updating so used this code from lines 35 from here:  https://stackoverflow.com/questions/46969864/on-query-parameters-change-route-is-not-updating
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {     
    // route.params.subscribe(val => {
    //   this.findWeather(this.city.name, this.city.country)  
    // })
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;


  }

  findWeather(name: string, country: string): void {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&APPID=a7c590ba9ef0beb2677f56440b4f04d6&&units=imperial`
      )
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
      });
  }



  ngOnInit(): void {
    
    this.route.paramMap
    .subscribe(p => {
      this.city = CITIES.find(city => {  
        // return city.id === parseInt(p.get('i') || '', 10);       
        return city.name === (p.get('name') || '');       

      });
    });
    this.findWeather(this.city.name,  this.city.country );
  }
  

}
