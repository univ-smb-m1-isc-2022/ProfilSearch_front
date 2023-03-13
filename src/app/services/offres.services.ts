import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from '../models/offre.model';

@Injectable ({
    providedIn: 'root'
})

export class OffresService {

    // constructor() { }
    constructor(private http: HttpClient) { }

    getAllOffres(): Observable<Offre[]> {
        return this.http.get<Offre[]>('http://localhost:8080/profilsearch/offre/all');
    }

    getOffreById(id : string): Observable<Offre> {
        return this.http.get<Offre>('http://localhost:8080/profilsearch/offre/' + id);
    }

    createOffre(offre: Offre): Observable<Offre> {
        return this.http.post<Offre>('http://localhost:8080/profilsearch/offre/create', offre);
    }

}