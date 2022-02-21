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
    //WANT TO TAKE THE VALUE AND APPEND TO THE URL AND SEARCH BY NAME
    this.router.navigate(['/cities', form])// , {relativeTo: this.city.name}
    // this.cities.forEach(obj => {
    //   if(obj.name.include(form)){
    //     this.cityNames.push(obj);
    //     console.log(this.cityNames)
        // console.log("this is searchbtn console.log");
      
      }




  ngOnInit(): void {
    // this.route.params.subscribe(params =>{
    //   if(params.searchTerm)
    //   this.city = this.cities.getAll().filter(city =>
    //     city.name.includes(params.searchTerm))

    // })
    // this.route.paramMap
    // .subscribe(p => {
    //   this.city = CITIES.find(city => {  
    //     return city.name === (p.get('name') || '');       
    //   });
    // });
  }

}
