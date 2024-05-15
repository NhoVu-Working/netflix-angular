import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { LoginComponent} from "./features/auth/login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {LayoutModule} from "@angular/cdk/layout";
import 'swiper/swiper-bundle.min.css';

@NgModule({
  declarations: [],
  imports: [
    LoginComponent,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
