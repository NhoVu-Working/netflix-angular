import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatFormField,
    FormsModule,
    MatButton,
    MatCardContent,
    MatInput,
    MatCardHeader,
    NgIf,
    MatLabel
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string = "";
  password: string = ""
  errorMessage: string = ""

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  register() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then(res => {
      console.log('Registerd successfully', res);
      this.router.navigate(['/login']).then(res => {
        console.log("navigate to login page")
      })
        .catch(error => {
          this.handleError(error)

        })


    })
  }

  handleError(error: any): void {
    switch (error.code) {
      case 'auth/email-already-in-use':
        this.errorMessage = 'this email is already in use by another account';
        break;
      default:
        this.errorMessage = 'An unexpected error occurred.Please try again later';
        break;
    }

  }

}
