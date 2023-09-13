import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr'
import { ReplaceComma } from './pipes/pipe-personnalisés/replace-comma.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {HttpClientModule} from '@angular/common/http';
import { HommeComponent } from './homme/homme.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component'
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailGuard } from './guard/hotel-detail.guard';
registerLocaleData(localFr,'fr')

const appRoutes : Routes =[
  {path: 'home',component: HommeComponent},
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'hotels/:id',component:HotelDetailComponent, canActivate:[HotelDetailGuard]},
  {path:'hotels',component:HotelListComponent},
  {path:'**',redirectTo: 'home',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent,
    HommeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{
      anchorScrolling:'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
