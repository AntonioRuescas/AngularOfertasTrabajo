import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormLogin } from 'src/app/models/contactFormLogin';

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
    private loginService: LoginService
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
    if (!this.loginForm.valid) 
    return;
    let FormLogin: ContactFormLogin = new ContactFormLogin(

    
      this.loginForm.controls.username.value,
      this.loginForm.controls.password.value,
      this.loginForm.controls.remenberMe.value,
      ''
    );
    this.isLoading = true;
    this.loginService.performLogin(FormLogin).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.isLoading = false;
        this.errorMsg = null;
      },
      (error) => {
        console.log('ERROR:' + JSON.stringify(error));
        this.errorMsg = `⚠️ No se ha podido iniciar sesión (${error.error?.error})`
        this.isLoading = false;
    },
      ()=>{
          this.isLoading = false;
      }
    );
  }
}
