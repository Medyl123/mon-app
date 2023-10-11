import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceComma } from '../pipes/pipe-personnalisés/replace-comma.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';



@NgModule({
  declarations: [
    StarRatingComponent,
    ReplaceComma
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingComponent,
    ReplaceComma
  ]
})
export class SharedModule { }
