import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any = CITIES;
  

  constructor(private route: ActivatedRoute, private cityService: CitiesService) { }

  ngOnInit(): void {
    console.log ("djj;lsjf");
    this.route.paramMap
    .subscribe(p => {
      this.cityService.chosenCity = CITIES.find(city => {  
        return city.id === (p.get('id'), 10);       
      })
    })
  }
}
