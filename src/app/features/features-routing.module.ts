import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent ,title: 'Login'},
      { path: 'register', component: RegisterComponent ,title:'register'},
      { path: 'forgot-password', component: ForgotPasswordComponent,title:'Forgot Password' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
