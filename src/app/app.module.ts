import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr'
import {HttpClientModule} from '@angular/common/http';
import { HommeComponent } from './homme/homme.component';
import { HotelModule } from './modules/hotel.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
registerLocaleData(localFr,'fr')


@NgModule({
  declarations: [
    AppComponent,
    HommeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HotelModule,
    AppRoutingModule // il doit être toujour en dernière position sinon l appli ne machera pas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
