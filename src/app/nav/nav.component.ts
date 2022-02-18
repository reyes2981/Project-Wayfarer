import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
cities: any= CITIES;
city: any;


// searchBtn(form: string){
//   if(form === 'London'){
//     console.log("wkdsjfkljdf");
//   }
//   console.log(form)
// }

/*
  searchBtn(form: NgForm){
    // if(form === this.city.name){
    //   console.log("wkdsjfkljdf");
    // }
    console.log(form)
   

  }
  */

  constructor(private route: ActivatedRoute, private router: Router) { }

  searchBtn(form: any ){
    console.log(form)
    this.router.navigate(['/cities', form])
    // this.cities.forEach(obj => {
    //   if(obj.name.include(form)){
    //     this.cityNames.push(obj);
    //     console.log(this.cityNames)
        console.log("kdfjkdjf");
        
        
      }



  ngOnInit(): void {
    this.route.paramMap
    .subscribe(p => {
      this.city = CITIES.find(city => {  
        return city.name === (p.get('name') || '');       
      });
    });
  }

}
