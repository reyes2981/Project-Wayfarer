import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CitiesComponent,
    CityComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
