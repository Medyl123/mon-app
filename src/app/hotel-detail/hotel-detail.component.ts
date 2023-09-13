import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HotelListService } from '../service/hotel-list.service';
import { IHotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  public hotel: IHotel = <IHotel>{};// j initialise la valeur de mon hotel en mettant une valeur vide
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelListService,
    private router : Router
  ){ }

  ngOnInit(): void{
    //const id : number =Number(this.route.snapshot.paramMap.get('id')) ; on peut aussi utiliser ca
    const id : number =+this.route.snapshot.paramMap.get('id')!;
    this.hotelService.getHotels().subscribe((hotels: IHotel[]) =>{
      this.hotel = hotels.find((hotel:IHotel) => hotel.hotelId===id)!
      console.log('hotel: ',this.hotel);
    })

  }

  public backToList():void{
    this.router.navigate(['/hotels']);
  }

}
