import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = "";
  errorMessage:string=""
  successMessage:string=""
  constructor(private authService:AuthService) {
  }
  async onSendResetLink():Promise<void>{
    try {
      await this.authService.senResetLink(this.email)
    }
    catch (error:any) {
      console.log(error)
      this.errorMessage=error.message
      this.successMessage=""
    }

  }

}
