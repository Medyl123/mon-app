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

registerLocaleData(localFr,'fr')

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
