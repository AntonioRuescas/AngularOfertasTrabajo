import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-tableAdmin',
  templateUrl: './tableAdmin.component.html',
  styleUrls: ['./tableAdmin.component.css'],
  providers: [HomeService],
})
export class TableAdminComponent implements OnInit {
  //Declaramos variables a utilizar.
  public arrayTitleOfferAdmin!: Array<any>;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getReloadOffer();
  }
  //Método para borrar las ofertas.
  public eraseOffer(id: string): void {
    this.loginService.eraseOffer(id).subscribe(
      (response) => {
        console.log(response);
        this.getReloadOffer();
      },
      (error) => {
        console.log(error);
      }
    );
    //Compruebo borrado de la oferta.
    console.log('erase id ', id);
  }
  //Método para recargar la vista de ofertas.
  public getReloadOffer(): void {
    this.homeService.getDataOffer().subscribe(
      (response) => {
        this.arrayTitleOfferAdmin = response;
      },
      (error) => {
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }
}
