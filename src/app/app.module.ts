import { NgModule } from "@angular/core";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {firebaseConfig} from "./enviroments/enviroments";
import { LoginComponent} from "./features/auth/login/login.component";

@NgModule({
  declarations: [],
  imports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
