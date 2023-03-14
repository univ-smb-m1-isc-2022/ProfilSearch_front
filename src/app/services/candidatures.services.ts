import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from '../models/candidature.model';


@Injectable ({
    providedIn: 'root'
})

export class CandidaturesService {

    // constructor() { }
    constructor(private http: HttpClient) { }

    createCandidature(candidature: Candidature): Observable<Candidature> {
        console.log("Candidature :: " + candidature)
        return this.http.post<Candidature>('http://localhost:8080/profilsearch/candidature/create', candidature);
    }

    getCandidaturesByOffreId(id: string): Observable<Candidature[]> {
        return this.http.get<Candidature[]>('http://localhost:8080/profilsearch/candidature/offre/' + id);
    }

}