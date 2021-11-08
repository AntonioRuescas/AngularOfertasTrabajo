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
  
  public arrayTitleOfferAdmin!: Array<any>;

  constructor(
    private homeService: HomeService, 
    private router: Router,
    private loginService: LoginService
    ) {}

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
  public eraseOffer(id: string): void {
    this.loginService.eraseOffer(id).subscribe(
      (response) => {
        console.log(response);
        this.homeService.getDataOffer();
      },
      (error) =>{
        console.log(error);
      },
      ()=>{
        window.location.reload; //Sirve para recargar la pantalla que estamos viendo.
      }
    )
    
    console.log('erase id ', id);
    //this.router.navigate(['home']);
  }
  

}
