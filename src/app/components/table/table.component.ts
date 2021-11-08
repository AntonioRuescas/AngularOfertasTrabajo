import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HomeService], //Inyectamos HomeService en el componente
})
export class TableComponent implements OnInit {
  //Declaramos variables a utilizar.
  public arrayTitleOffer!: Array<any>;

  constructor(private homeService: HomeService, private router: Router) {}

  //Nos subscribimos al servicio y mandamos error en caso de fallo.
  ngOnInit(): void {
    this.homeService.getDataOffer().subscribe(
      (response) => {
        this.arrayTitleOffer = response;
      },
      (error) => {
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }

  //Función para ir a la vista detalle de las ofertas
  public goToDetailOffer(id: any): void {
    console.log('table id ', id);
    this.router.navigate(['/home/detail', id]);
  }
  //Función para ir a la pantalla principal
  public goToLogin(): void {
    this.router.navigate(['login']);
  }
}
