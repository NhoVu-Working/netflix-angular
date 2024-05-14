import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesRoutingModule} from './features-routing.module';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent

  ]
})
export class FeaturesModule {
}
