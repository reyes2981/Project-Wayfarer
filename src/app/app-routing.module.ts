import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
}, 
{
    path: 'cities',

    component: CitiesComponent,
    children: [
      // {
      //   path: ':id',
      //   component: CityComponent
      // },
      {
        path:'names/:name',
        component: SearchComponent
        
      },
      {
        path: ':id/posts/:postId',
        component: PostComponent
      }
    ]
},

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  