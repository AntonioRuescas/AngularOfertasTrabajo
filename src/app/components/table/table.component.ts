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
  
  public arrayTitleOffer!: Array<any>;

  constructor(private homeService: HomeService, private router: Router) {}

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

  public goToDetailOffer(id: any): void {
    console.log('table id ', id);
    this.router.navigate(['/home/detail', id]);
  }

  public goToLogin(): void {
    this.router.navigate(['login']);
  }
}
