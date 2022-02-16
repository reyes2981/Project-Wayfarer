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
    component: CitiesComponent
},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  