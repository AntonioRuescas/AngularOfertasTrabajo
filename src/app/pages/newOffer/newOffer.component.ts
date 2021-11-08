import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewOffer } from 'src/app/models/newOffer';
import { Offer } from 'src/app/models/offer';
import { HomeService } from 'src/app/services/home.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-newOffer',
  templateUrl: './newOffer.component.html',
  styleUrls: ['./newOffer.component.css'],
})
export class NewOfferComponent implements OnInit {
  //Declaramos variables a utilizar.
  newOfferForm: FormGroup;
  send: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private homeService: HomeService,
    private router: Router
  ) {
    //Añadimos las validaciones.
    this.newOfferForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      company: ['', [Validators.required, Validators.maxLength(50)]],
      salary: ['', Validators.required],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.maxLength(50), Validators.email],
      ],
    });
  }
  //Al pulsar en enviar se validan las validaciones y si son correctas se subscribe insertando una nueva oferta.
  submitForm() {
    this.send = true;
    if (!this.newOfferForm.valid) return;
    const newOfferData = {
      titulo: this.newOfferForm.value.title,
      descripcion: this.newOfferForm.value.description,
      empresa: this.newOfferForm.value.company,
      salario: this.newOfferForm.value.salary,
      ciudad: this.newOfferForm.value.city,
      email: this.newOfferForm.value.email,
    };
    console.log(newOfferData);

    this.loginService.insertNewOffer(newOfferData).subscribe(
      (response) => {
        console.log('respuesta ', response);

        this.goToOfferAdmin();
      },
      (error) => {
        console.log(error);
      }
    );
    this.homeService.getDataOffer();
  }
  ngOnInit(): void {}

  //Método para navegar a las ofertas del administrador.
  goToOfferAdmin() {
    this.router.navigate(['offerAdmin']);
  }
}
