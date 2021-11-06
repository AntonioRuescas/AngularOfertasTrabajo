import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getDataOffer(): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE;
    return this.http.get(url);
  }
  public getDataOfferId(id: string): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE_ID + id;
    return this.http.get(url);
  }
}
