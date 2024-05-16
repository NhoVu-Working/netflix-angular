import {Router, RouterModule} from "@angular/router";
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {authGuard} from "./core/guards/auth.guard";
import {MovieDetailComponent} from "./pages/movie-detail/movie-detail.component";

export const routes: Routes = [
  {path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),},
  {path: 'home', component: HomeComponent,title:'Netflix', canActivate: [authGuard]},
  {path:'detail/:id',component:MovieDetailComponent,title:'Netflix everywhere',canActivate:[authGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


