import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {GoogleAuthProvider} from '@angular/fire/auth'
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  providers: [AngularFireAuth],
  standalone: true,
  imports: [
    MatCard,
    FormsModule,
    MatFormField,
    MatButton,
    MatInput,
    MatLabel,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgIf,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = "";

  constructor(private authService:AuthService, private router:Router) {
  }

  async onLogin():Promise<void>{
    try {
      await this.authService.loginInWithEmailAndPassword(this.email,this.password);
    }
    catch (error) {
      console.log("login failed ",error)
      this.handleError(error)
    }

  }

  async onLoginWithGoogle():Promise<void> {
    try{
      await this.authService.loginWithGoogle();
    }
    catch (error) {
      console.log("login failed ",error)
      this.handleError(error)
    }


  }


  navigateRegister(){
    this.router.navigate(['/register']).then(res => {
      console.log("navigate to register page")
    })}

  handleError(error: any) {
    console.log("login failed ", error);
    switch (error.code) {
      case 'auth/wrong-password':
        this.errorMessage = "Incorrect password,please try again";
        break;
      case 'auth/user-not-found':
        this.errorMessage = "No user found with this email";
        break;
      case 'auth/invalid-credential':
        this.errorMessage = "Incorrect password,please try again";
        break;
      default:
        this.errorMessage = "An unexpected error occurred .Please try again later.";
        break;


    }


  }
}
