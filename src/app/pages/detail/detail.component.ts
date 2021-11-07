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
  public sub: any;
  //public arrayOfferId!: Array<any>;
  public offer = new Offer();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

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
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public goToHome(): void {
    this.router.navigate(['home']);
  }
}
