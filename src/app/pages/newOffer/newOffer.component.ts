import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-newOffer',
    templateUrl: './newOffer.component.html',
    styleUrls: ['./newOffer.component.css']
})
export class NewOfferComponent implements OnInit {
    constructor(
        private loginService: LoginService,
        private homeService: HomeService
    ) { }

    ngOnInit(): void { }
    insertProvisional():void{
        this.loginService.insertNewOffer('sdfas','sdfsadf', 'sadfasdf', 1222 , 'dsafasdf', 'a@d.com').subscribe(
          (response)=>{
            console.log(response);
          },
          (error)=>{
            console.log(error);
          }
        );
        this.homeService.getDataOffer();
      }
}
