import { ContactFormLogin } from 'src/app/models/contactFormLogin';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

//Variables a utilizar.
const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private token = '';
  private ContactFormLoginBehaviorSubject: BehaviorSubject<ContactFormLogin | null>;
  public login: Observable<ContactFormLogin | null>; //Para saber quien hay logado.

  constructor(private http: HttpClient, private route: Router) {
    this.ContactFormLoginBehaviorSubject =
      new BehaviorSubject<ContactFormLogin | null>(
        JSON.parse(<string>localStorage?.getItem(LOGIN_KEY))
      );
    this.login = this.ContactFormLoginBehaviorSubject.asObservable();
  }

  performLogin(enter: ContactFormLogin): Observable<any> {
    //console.log('performLogin(' + JSON.stringify(enter) + ')');
    let loginUrl = AppEndPoints.ENDPOINT_AUTHENTICATE;
    return this.http.post<ContactFormLogin>(loginUrl, enter).pipe(
      map((returnAPI) => {
        console.log('Login OK: ' + JSON.stringify(returnAPI));
        this.ContactFormLoginBehaviorSubject.next(returnAPI);
        localStorage.setItem(LOGIN_KEY, JSON.stringify(returnAPI));
        //console.log(localStorage.getItem(LOGIN_KEY));
        console.log(returnAPI);
        //let value = localStorage.getItem(LOGIN_KEY);
        //value = JSON.parse(value!);
        console.log(JSON.parse(<string>localStorage?.getItem(LOGIN_KEY)));
        return returnAPI;
      })
    );
  }

  //Función para borrar ofertas.
  public eraseOffer(id: string): Observable<any> {
    console.log(this.token == undefined);
    const headers = { Authorization: `Bearer ${this.token}` };
    console.log('headers ', headers);
    let url = AppEndPoints.ENDPOINT_OFFER_TITLE_ID + id;
    return this.http.delete(url, { headers });
  }
  //Función para obtener el token.
  setToken(value: string) {
    this.token = value;
    console.log(this.token);
  }
  //Método del observable para insertar nuevas ofertas. {
  insertNewOffer(newOffer: any): Observable<any> {
    const headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };
    return this.http.post(AppEndPoints.ENDPOINT_OFFER_TITLE, newOffer, {
      headers,
    });
  }
  /*
  //Método para hacer logout.
  performLogout(): void {
    localStorage.removeItem(LOGIN_KEY);
    this.ContactFormLoginBehaviorSubject.next(null);
    this.route.navigate(['/login']);
  }*/
}
