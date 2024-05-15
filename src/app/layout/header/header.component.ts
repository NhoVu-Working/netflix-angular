import {Component, inject} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  username = "Admin";
  userImg: string = "";
  private authService = inject(AuthService);

  async signOut(): Promise<any> {
    await this.authService.logout()

  }


}
