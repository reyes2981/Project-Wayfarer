import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  cities: any = CITIES;
  city: any;
  post:any;
  postOne: any;
  
 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.paramMap
      .subscribe(params => {
        const postId = parseInt(params.get('postId') || '', 10);
        this.city = CITIES.find(city => {
          return city.id === parseInt(params.get('id') || '', 10);
        });
        // https://www.concretepage.com/questions/675
        // this.postOne = CITIES.forEach(data => {
        //   data.posts.find(post => {
        //     return post.id === parseInt(params.get('id') || '', 10);
        //   })
        // })
        this.post = this.city.posts[postId];
        // this.city.posts.slice().reverse();
      });
   
  
  }

}
