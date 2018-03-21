import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {HotelsService} from './providers/hotels.service'
import { AppComponent } from './app.component';
import { HotelsViewComponent } from './components/hotels-view/hotels-view.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/Hotels', pathMatch: 'full' },
  { path: 'Hotels',  component: HotelsViewComponent },
  
  { path: 'detail/:name', component: HotelDetailsComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HotelsViewComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
