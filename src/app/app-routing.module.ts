import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
}, 
{
    path: 'cities',
<<<<<<< HEAD
    component: CitiesComponent
=======
    component: CitiesComponent,
    children: [
      {
        path: ':id',
        component: CityComponent
      },
      // {
      //   path: ':id/posts/:postId',
      //   component: PostComponent
      // }
    ]
>>>>>>> e1c4d0e470dd34d3617422a5e6fc94ca5394cdf5
},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  