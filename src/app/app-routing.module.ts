import {Router, RouterModule} from "@angular/router";
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";

export const routes :Routes=[
  {path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),},
  { path: '', redirectTo: '/features/auth/login', pathMatch: 'full' }
  // {path:'login', component:LoginComponent},
  // {path:'',redirectTo:('/login'),pathMatch:'full'},
  // {path:'register',component:RegisterComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


