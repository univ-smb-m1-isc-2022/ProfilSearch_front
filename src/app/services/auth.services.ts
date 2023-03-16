import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { Constantes } from '../constantes';
import { LocalService } from './local.service';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient, private constantes: Constantes, private localService: LocalService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  private getHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (localStorage.getItem(this.constantes.ACCESS_TOKEN)) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(this.constantes.ACCESS_TOKEN));
    }
    return headers;
    }
    
      private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getCurrentUser(): Observable<any> {
    if (!localStorage.getItem(this.constantes.ACCESS_TOKEN)) {
      return throwError("No access token set.");
    }
    const headers = this.getHeaders();
    return this.http.get(this.constantes.API_BASE_URL + "/user/me", { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  login(loginRequest: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.constantes.API_BASE_URL + "/auth/login", loginRequest, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  signup(signupRequest: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.constantes.API_BASE_URL + "/auth/signup", signupRequest, { headers })
      .pipe(
        catchError(this.handleError)
      );
    }
    
    loginWithGoogle(): Observable<any> {
    const redirectUri = encodeURIComponent(this.constantes.OAUTH2_REDIRECT_URI);
      const url = `${this.constantes.API_BASE_URL}/oauth2/authorize/google?redirect_uri=${redirectUri}`;
      console.log(url)
      
    return this.http.get(url, this.httpOptions);
  }

  getUserInfo(token: string) {
        const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get("http://localhost:8080/profilsearch/user/me", httpOptions).subscribe(
      (response) => {
        console.log(response);

        var name = response["name" as keyof Object];
        var email = response["email" as keyof Object];
        var id = response["id" as keyof Object];
        var imageUrl = response["imageUrl" as keyof Object];

        this.localService.saveData("name", name.toString());
        this.localService.saveData("email", email.toString());
        this.localService.saveData("id", id.toString());
        this.localService.saveData("imageUrl", imageUrl.toString());

      }
    );
    
  }

  logout() {
    this.localService.removeData("name");
    this.localService.removeData("email");
    this.localService.removeData("id");
    this.localService.removeData("imageUrl");

    this.localService.saveData("authenticated", "false");
    this.localService.saveData("token", 'null');
    this.localService.saveData("accessToken", 'null');
    
  }
}
