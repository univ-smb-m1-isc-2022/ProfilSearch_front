import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';
import { AuthService } from 'src/app/services/auth.services';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router, public constantes: Constantes, private localService: LocalService, private http: HttpClient) { }

  authUrl: string = '';
  error: string = '';

  ngOnInit(): void {

    const inviteLink = 'https://example.com/invite/1234';
    const redirectUri = 'http://localhost:3000/oauth2/redirect?invite_link=' + inviteLink;
    this.authUrl = 'http://localhost:8080/oauth2/authorize/google?redirect_uri=' + encodeURIComponent(redirectUri);
    this.authUrl = 'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect';

    this.error = this.router.parseUrl(this.router.url).queryParams['error'];
    console.log(this.error)

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

  connect() {
    console.log('connect')
    const params = new HttpParams()
      .set('additional_param_1', 'value1')
      .set('additional_param_2', 'value2');
        
    const baseUrl = 'http://localhost:8080/oauth2/authorize/google';
    const redirectUri = 'http://localhost:3000/oauth2/redirect';
    const url = `${baseUrl}?redirect_uri=${encodeURIComponent(redirectUri)}&${params.toString()}`;
    
    location.href = url;


  }
}