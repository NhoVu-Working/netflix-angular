import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  username:string | null = "";
  userImg: string = "";
  private authService = inject(AuthService);
  private afAuth=inject(AngularFireAuth)

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {

        this.username=user.displayName || user.email
      }
      else {
        this.username=null;
      }
    })

  }


  async signOut(): Promise<any> {
    await this.authService.logout()

  }


}
