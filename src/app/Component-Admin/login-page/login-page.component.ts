import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';
import { LocalService } from 'src/app/services/local.service';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public constantes: Constantes, private localService: LocalService) {}

  ngOnInit(): void {
    const token = this.router.parseUrl(this.router.url).queryParams['token'];
    if (token) {
      localStorage.setItem('accessToken', token);
    }

    console.log('token:', token)

    this.authService.getUserInfo(token)

    // redirection vers /admin si l'utilisateur est déjà connecté
    if (this.localService.getData('accessToken') && this.localService.getData('accessToken') !== 'null') {
      this.router.navigate(['/admin']);
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .subscribe(response => {
        // Si la connexion réussit, vous pouvez rediriger l'utilisateur vers une page d'accueil ou une autre page de l'application.
        // Par exemple :
        window.location.href = '/home';
      }, error => {
        // Si la connexion échoue, vous pouvez afficher un message d'erreur à l'utilisateur.
        // Par exemple :
        console.log('Erreur lors de la connexion avec Google : ', error);
      });
  }


}
