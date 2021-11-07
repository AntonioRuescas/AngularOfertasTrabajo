import { ContactFormLogin } from 'src/app/models/contactFormLogin';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private ContactFormLoginBehaviorSubject: BehaviorSubject<ContactFormLogin | null>;
  public login: Observable<ContactFormLogin | null>; //Para saber quien hay logado.

  constructor(private http: HttpClient, private route: Router) {
    this.ContactFormLoginBehaviorSubject =
      new BehaviorSubject<ContactFormLogin | null>(
        JSON.parse(<string>localStorage?.getItem(LOGIN_KEY))
      );
    this.login = this.ContactFormLoginBehaviorSubject.asObservable();
  }

  performLogin(enter: ContactFormLogin): Observable<ContactFormLogin> {
    console.log('performLogin(' + JSON.stringify(enter) + ')');
    let loginUrl = AppEndPoints.ENDPOINT_AUTHENTICATE;
    return this.http.post<ContactFormLogin>(loginUrl, enter).pipe(
      map((returnAPI) => {
        console.log('Login OK: ' + JSON.stringify(returnAPI));
        this.ContactFormLoginBehaviorSubject.next(returnAPI);
        localStorage.setItem(LOGIN_KEY, JSON.stringify(returnAPI));
        return returnAPI;
      })
    );
  }

  performLogout(): void {
    localStorage.removeItem(LOGIN_KEY);
    this.ContactFormLoginBehaviorSubject.next(null);
    this.route.navigate(['/login']);
  }
}
