import {Component} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {NgIf} from "@angular/common";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LoginComponent,
    NgIf,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  currentView: string = 'login'

  constructor() {
  }
}
