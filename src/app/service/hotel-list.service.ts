import { Injectable } from '@angular/core';
import { IHotel } from '../model/hotel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs'
import { catchError,map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HotelListService {
  private readonly HOTEL_API_URL = 'api/hotels'//pour dire que nous n avons que le droit de lire la valeur
  constructor( private http : HttpClient) {

  }
  public getHotels(): Observable <IHotel[]>{
    return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
      tap(hotels => console.log('hotels:', hotels)),
      catchError(this.handleHttpError)
    );
  }
  //telecharge un hotel entier en fonction de l id correspondant
  public getHotelById(id:number):Observable<IHotel | undefined>{
    const url = `${this.HOTEL_API_URL}/${id}`;
    if (id ===  0){
      return of(this.getDefaultHotel());
    }
    return this.http.get<IHotel>(url).pipe(
      catchError(this.handleHttpError)
    )
  }
  // methode permettant de créer un hotel
  // le cathError permet de recuperer l erreur si celle ci arrive pendant l opération
  public createHotel(hotel:IHotel):Observable<IHotel>{
    hotel={
      // le street java script qui permet de copier les valeur existante de l hotel
      ...hotel,
      imageUrl:'assets/img/a.jpg',
      id:null,
    }


    return this.http.post<IHotel>(this.HOTEL_API_URL, hotel).pipe(
      catchError(this.handleHttpError)
    )
  }
  // methode permettant de modifier un hotel et le pipe permet de prévenir les erreurs à venir
  public updateHotel(hotel:IHotel):Observable<IHotel>{
    const url = `${this.HOTEL_API_URL}/${hotel.id}`
    return this.http.put<IHotel>(url, hotel).pipe(
      catchError(this.handleHttpError)
    )
  }

  // on initialise l hotel en cas d erreur
  public getDefaultHotel():IHotel{
    return{
      id:0,
      hotelName:'',
      description:'',
      price:null,
      rating:null,
      imageUrl:''

    }
  }

  private handleHttpError(err: HttpErrorResponse) {
    let error: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
      error = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`
      );
      error = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.'
      + '\n'
      + error
    );

    }
}
