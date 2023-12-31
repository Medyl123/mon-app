import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { HotelEditComponent } from '../hotel-edit/hotel-edit.component';

@Injectable({
  providedIn: 'root'
})
export class HotelEditGuard implements CanDeactivate<HotelEditComponent> {
  canDeactivate(
    component: HotelEditComponent): boolean {
      // dirty informe si le formulaire contien au moins un element ou un champs est rempli
      if(component.hotelForm.dirty){
        const hotelName = component.hotelForm.get('hotelName')?.value|| 'Nouveau hotel';
        return confirm(`voulez-vous annuler les changements effectuées sur ${hotelName}`);
      }
    return true;
  }

}
