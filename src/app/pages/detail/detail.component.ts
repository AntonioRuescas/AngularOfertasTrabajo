import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  //Declaramos variables a utilizar.
  public sub: any;
  public offer = new Offer();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  //En el OnInit nos subscribimos para mostrar el detalle de la oferta.
  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((parms: ParamMap) => {
      console.log('El id de la noticia es ' + parms.get('id'));
      this.homeService.getDataOfferId(parms.get('id')!).subscribe(
        (response) => {
          console.log(response);
          this.offer = response;
        },
        (error) => {
          console.log('Error ' + JSON.stringify(error));
        }
      );
    });
  }
  //Método para desuscribirse
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  //Método para ir a la pantalla de inicio.
  public goToHome(): void {
    this.router.navigate(['home']);
  }
}
