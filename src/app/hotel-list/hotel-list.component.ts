import { Component, OnInit } from '@angular/core';
import { IHotel } from '../model/hotel';
import { HotelListService } from '../service/hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{


  //titleH = 'Gestion';
  public titre = 'Liste hotels';
  public hotels: IHotel[] = []; // liste d hotels

  public showBadge: boolean = false;
  private _hotelFilter = 'mot';
  public filteredHotels:IHotel[]=[]; // on sauvegarde la variable dans un tableau vide
  public receivedRating:string='';
  public errMsg ?:string;

  constructor(private hotelListService : HotelListService){

  }
  ngOnInit(): void {
    this.hotelListService.getHotels().subscribe({
      next: hotels => {
        this.hotels = hotels;
        this.filteredHotels=this.hotels;
      },
      error: err => this.errMsg = err
    }); //après l injection dans le constructeur
    this.hotelFilter='';
  }

  public toggleIsNewBadge():void{
    this.showBadge= !this.showBadge;

  }
  public get hotelFilter():string{
    return this._hotelFilter;
  }

  public set hotelFilter(filter:string){
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter): this.hotels;
  }

  public receiveRatingClicked(message:string){
    this.receivedRating = message;
    console.log(message);
  }

  //methode de filtre en fonction du critère de recherche
  private filterHotels(criteria: string): IHotel[]{
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );
      return res;
  }

}
