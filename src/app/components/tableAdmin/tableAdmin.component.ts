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
  
  public arrayTitleOfferAdmin!: Array<any>;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService.getDataOffer().subscribe(
      (response) => {
        this.arrayTitleOfferAdmin = response;
      },
      (error) => {
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }
  public eraseOffer(id: any): void {
    console.log('erase id ', id);
    this.router.navigate(['offers', id]);
  }
  

}
