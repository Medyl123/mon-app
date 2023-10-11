export interface IHotel{
  id: number | null;
  hotelName:string;
  description:string;
  price:number | null;
  imageUrl:string;
  rating: number | null;
}
/*
export class Hotel implements IHotel{
  constructor(
    public hotelId: number,
    public hotelName:string,
    public description:string,
    public price:number,
    public imageUrl:string,
    public rating: number,

  )
}*/
