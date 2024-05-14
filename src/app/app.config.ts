import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from "./app-routing.module";
// import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire/compat';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getDatabase, provideDatabase} from "@angular/fire/database";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {getFunctions, provideFunctions} from "@angular/fire/functions";
import {firebaseConfig} from "./enviroments/enviroments";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(),
    importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideDatabase(() => getDatabase()),
      provideStorage(() => getStorage()),
      provideFunctions(() => getFunctions()),),
    ]
};
