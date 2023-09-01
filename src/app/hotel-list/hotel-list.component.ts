import { Component, OnInit } from '@angular/core';
import { IHotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{


  titleH = 'Gestion';
  public titre = 'Liste hotels';
  public hotels: IHotel[] = [

    {
      hotelId: 1,
      hotelName: 'Buea sweet life',
      description:'Belle vue au bord de la mer',
      price: 129.5,
      imageUrl:'assets/img/a.jpg'
    },
    {
      hotelId: 2,
      hotelName: 'Beach Miami',
      description:'Belle vue avec piscine',
      price: 203.5,
      imageUrl:'assets/img/a1.jpg'
    },
    {
      hotelId: 3,
      hotelName: 'Beach in de US',
      description:'Belle vue et cadre agréable',
      price: 230.5,
      imageUrl:'assets/img/a2.jpg'
    },
    {
      hotelId: 4,
      hotelName: 'Luxury Miami',
      description:'Magnifique vue ',
      price: 120.5,
      imageUrl:'assets/img/a3.jpg'
    },

  ];

  public showBadge: boolean = false;
  private _hotelFilter = 'mot';
  public filteredHotels:IHotel[]=[]; // on sauvegarde la variable dans un tableau vide

  ngOnInit(): void {
    this.filteredHotels=this.hotels;
    this.hotelFilter=''
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
  //methode de filtre en fonction du critère de recherche
  private filterHotels(criteria: string): IHotel[]{
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );
      return res;
  }

}
