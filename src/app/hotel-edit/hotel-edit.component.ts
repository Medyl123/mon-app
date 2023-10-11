import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelListService } from '../service/hotel-list.service';
import { IHotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  public hotelForm !: FormGroup;
  public hotel ?: IHotel; // son but est de sauvegarder l hotel que nous avons selectionné
  public pageTitle!:string; // sauvegarde le titre de notre page
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hotelListService : HotelListService
    ){

    }
  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      hotelName:['',Validators.required],
      price:['',Validators.required],
      rating:[''],
      description:['']
    })
    this.route.paramMap.subscribe(params =>{
      const id: number= +params.get('id')!;//
      /*if (id !== null){
        const parsedId = +id;
       // console.log(parsedId, 'jjjjjjj')
       this.publicgetSelectedHotel(parsedId);
      } else{
        console.error('L\'ID n\'est pas valide')
      }*/
      //const id: number = +this.publicgetSelectedHotel(id);
      this.getSelectedHotel(id);

    });
  }
  public getSelectedHotel(id:number): void{
    this.hotelListService.getHotelById(id).subscribe((hotel ?:IHotel)=>{
     // console.log(hotel)
      this.displayHotel(hotel!);
    });
  }

    // elle permet de charger les element dans le formulaire
    public displayHotel(hotel: IHotel): void{
      this.hotel = hotel;

      if(this.hotel?.id===0){
        this.pageTitle = 'Créer un hotel'
      } else{
        this.pageTitle=`Modifier l\'hotel ${this.hotel.hotelName}`;
      }

      this.hotelForm.patchValue({
        hotelName: this.hotel.hotelName,
        price: this.hotel.price,
        rating: this.hotel.rating,
        description: this.hotel.description
      })
    }
  public saveHotel():void{
    if(this.hotelForm.valid){
      if(this.hotelForm.dirty){
        const hotel: IHotel = {
          ...this.hotel,
          ...this.hotelForm.value
        };
        if(hotel.id===0){
          this.hotelListService.createHotel(hotel).subscribe({
            next:() => this.saveCompleted()
          });
        }else{
          this.hotelListService.updateHotel(hotel).subscribe(
            {
              next:()=>this.saveCompleted()
            }
          );
        }
      }
    }
    console.log(this.hotelForm.value);//affiche les valeur contenu dans notre formullaire

  }
  // cette methode permet de sauvegarder lorsque la modification doit être effectué
  public saveCompleted():void{
    this.hotelForm.reset(); // reinitialise mon formullaire lorsque la modification est un sucèss
    this.router.navigate(['/hotels']);
  }

}
