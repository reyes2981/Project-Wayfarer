import { Component, OnInit} from '@angular/core';
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
cityName: any;




  constructor(private route: ActivatedRoute, private router: Router) { }

  onSubmit(forma: NgForm){
    const name = forma.value.nameSearch.toLowerCase();
    console.log(forma.value.nameSearch)
    this.router.navigate(['/cities/names', name])
   
      }

  ngOnInit(): void {
    
  }

}
