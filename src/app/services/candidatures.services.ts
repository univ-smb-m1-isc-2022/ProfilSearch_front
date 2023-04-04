import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from '../models/candidature.model';
import { Constantes } from '../constantes';

@Injectable ({
    providedIn: 'root'
})

export class CandidaturesService {

    // constructor() { }
    constructor(private http: HttpClient, private constantes : Constantes) { }

    createCandidature(candidature: Candidature): Observable<Candidature> {
        console.log("Candidature :: " + candidature)
        var url = this.constantes.API_BASE_URL + "/profilsearch/candidature/create";
        return this.http.post<Candidature>(url, candidature);
    }

    getCandidaturesByOffreId(id: string): Observable<Candidature[]> {
        var url = this.constantes.API_BASE_URL + "/profilsearch/candidature/offre/" + id;
        return this.http.get<Candidature[]>(url);
    }

    getCandidatureByToken(token: string): Observable<Candidature> {
        var url = this.constantes.API_BASE_URL + "/profilsearch/candidature/token/" + token;
        return this.http.get<Candidature>(url);
    }

    deleteCandidature(token: string): Observable<any> {
        var url = this.constantes.API_BASE_URL + "/profilsearch/candidature/delete/" + token;
        return this.http.get(url);
    }

}