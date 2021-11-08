import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  //Método para el observable de obtener las ofertas del home.
  public getDataOffer(): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE;
    return this.http.get(url);
  }
  //Método para el observable de obtener las ofertas por id.
  public getDataOfferId(id: string): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE_ID + id;
    return this.http.get(url);
  }
}
