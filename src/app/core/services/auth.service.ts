import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken')

  }

  setToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  async loginWithGoogle(): Promise<void> {
    const credentials = await this.afAuth.signInWithPopup(new GoogleAuthProvider())
    if (credentials.user) {
      const token = await credentials.user.getIdToken();
      this.setToken(token);
      this.router.navigate(['/home'])

    }

  }

  async loginInWithEmailAndPassword(email: string, password: string): Promise<void> {
    const credentials = await this.afAuth.signInWithEmailAndPassword(email, password);
    if (credentials.user) {
      const token = await credentials.user.getIdToken();
      this.setToken(token);
      this.router.navigate(['/home'])
    }

  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);

  }

  async register(email: string, password: string): Promise<void> {
    const user = await this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log("Register success", res);
      this.router.navigate(['/login']);

    })
      .catch(error => {
        console.log("register error ", error)
      })

  }

  async senResetLink(email: string): Promise<void> {
    await this.afAuth.sendPasswordResetEmail(email).then(res => {
      console.log("reset link sent", res);
    }).catch(error => {
      console.log("reset link error", error)
    })


  }


}
