import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  public arrayTitleOffer!: Array<any>;

  constructor(
      private homeService: HomeService, 
      private router: Router
      ) {}

  ngOnInit(): void {}

  public eraseOffer(id: any):void{
    console.log('erase id ' , id);
    this.router.navigate(['offers' , id]);
  }
}

