import { Injectable } from '@angular/core';

@Injectable()
export class Constantes {
    API_BASE_URL = 'https://profilsearch.api.oups.net';
    ACCESS_TOKEN = 'accessToken';
    OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
    // GOOGLE_AUTH_URL ='http://localhost:8080' + '/oauth2/authorize/google?redirect_uri=' + 'http://localhost:3000/oauth2/redirect'

    // GOOGLE_AUTH_URL ='http://localhost:8080' + '/oauth2/authorize/google?redirect_uri=' + 'http://localhost:3000/oauth2/redirect'
    // GOOGLE_AUTH_URL = 'http://localhost:8080' + '/oauth2/authorize/google?redirect_uri=' + 'http://localhost:3000/oauth2/redirect'
    // GOOGLE_AUTH_URL = 'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect?invite_link=";

    GOOGLE_AUTH_URL = 'https://profilsearch.api.oups.net/oauth2/authorize/google?redirect_uri=https://profilsearch.oups.net/oauth2/redirect';

    
}