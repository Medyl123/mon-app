import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { IHotel } from 'src/app/model/hotel';
export class HotelData implements InMemoryDbService{
  createDb(): Record<string,IHotel[]>  {
      const hotels: IHotel[]=[
        {
          id: 1,
          hotelName: 'Buea sweet life',
          description: 'Belle vue au bord de la mer',
          price: 230.5,
          imageUrl: 'assets/img/a.jpg',
          rating: 3.5
    },
    {
          id:2,
          hotelName: 'Marakech',
          description: 'Profitez de la vue sur les montagnes',
          price: 145.5,
          imageUrl: 'assets/img/a1.jpg',
          rating: 5
    },
    {
          id:3,
          hotelName: 'Abudja new look palace',
          description: 'Séjour complet avec service de voitures',
          price: 120.12,
          imageUrl: 'assets/img/a2.jpg',
          rating: 4
    },
    {
          id:4,
          hotelName: 'Cape town city',
          description: 'Magnifique cadre pour votre séjour',
          price: 135.12,
          imageUrl: 'assets/img/a3.jpg',
          rating: 2.5
    }
      ];
      return {hotels};
  }
  // genId est une methode de memoryId qui permet de genérer un nouvel identifiant pour chaque hotel creer
  genId(hotels:IHotel[]):number{
    return hotels.length > 0 ? Math.max(...hotels.map(hotel => hotel.id as number)) + 1 : 1; // on peut aussi utiliser || 0
  }
}