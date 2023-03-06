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
    
    offres : Offre[] = [
      {
        id: 1,
        titre: 'Développeur Angular',
        description: 'Nous recherchons un développeur Angular pour un projet de 3 mois',
        dateDebut: new Date('2020-01-01'),
        dateFin: new Date('2020-01-01'),
        type: 'CDI',
        place: 'Paris',
        salary: 3000,
      },
      {
        id: 2,
        titre: 'Développeur React',
        description: 'Nous recherchons un développeur React pour un projet de 3 mois',
        dateDebut: new Date('2020-01-01'),
        dateFin: new Date('2020-01-01'),
        type: 'CDI',
        place: 'Paris',
        salary: 3000,            },
      {
        id: 3,
        titre: 'Développeur Vue',
        description: 'Nous recherchons un développeur Vue pour un projet de 3 mois',
        dateDebut: new Date('2020-01-01'),
        dateFin: new Date('2020-01-01'),
        type: 'CDI',
        place: 'Paris',
        salary: 3000,            }
    ];

    getAllOffres(): Observable<Offre[]> {
        return this.http.get<Offre[]>('http://localhost:8080/profilsearch/offre/all');
    }

    getOffreById(id: number): Observable<Offre> {
        return this.http.get<Offre>(``);
    }

}