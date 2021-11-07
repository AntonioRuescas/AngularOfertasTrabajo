import { ContactFormLogin } from 'src/app/models/contactFormLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';
import { CookieService } from 'ngx-cookie-service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  public getDataOffer(): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE;
    return this.http.get(url);
  }
  public getDataOfferId(id: string): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE_ID + id;
    return this.http.get(url);
  }
/*
  //Función para enviar el formulario.
  public sendLogin(form: any): Observable<any> {
    //console.log('El formulario ha sido enviado');
    //console.log(form);
    const headers = 'Content-Type: “application/json”';
    let url = AppEndPoints.ENDPOINT_AUTHENTICATE;
    return this.http.post<ContactFormLogin>(url + id, JSON.stringify(form), {headers})
  }

  /*
  //Función para enviar el login.
  public login(user: any): Observable<any> {
    let url = AppEndPoints.ENDPOINT_AUTHENTICATE;
    return this.http.post(url, user);
  }
  //Función para almacenar el token.
  setToken(token: string) {
    this.cookies.set('token', token);
  }
  //Función para obtener el token.
  getToken() {
    return this.cookies.get('token');
  }*/

  //Función para borrar ofertas.
  public eraseOffer(id: string): Observable<any> {
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE_ID + id;
    return this.http.delete(url);
  }
}
