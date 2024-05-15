import {Router, RouterModule} from "@angular/router";
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {authGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  {path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}

  // {path:'login', component:LoginComponent},
  // {path:'',redirectTo:('/login'),pathMatch:'full'},
  // {path:'register',component:RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


