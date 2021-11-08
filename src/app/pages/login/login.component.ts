
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormLogin } from 'src/app/models/contactFormLogin';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  send: boolean = false;
  errorMsg!: string | null;
  isLoading: boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remenberMe: [''],
    });
    
  }

  ngOnInit(): void {}

  submitForm() {
    this.send = true;
    if (!this.loginForm.valid) return;
    let formLogin: ContactFormLogin = new ContactFormLogin(
      this.loginForm.controls.username.value,
      this.loginForm.controls.password.value,
      this.loginForm.controls.remenberMe.value,
      ''
    );
    this.isLoading = true;
    this.loginService.performLogin(formLogin).subscribe(
      (response) => {
        this.loginService.setToken(response.id_token);
        console.log('loginComponent', response.id_token);
        this.isLoading = false;
        this.errorMsg = null;
        this.router.navigate(['offerAdmin']);
      },
      (error) => {
        console.log('ERROR:' + JSON.stringify(error));
        this.errorMsg = '⚠️ No se ha podido iniciar sesión';
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
