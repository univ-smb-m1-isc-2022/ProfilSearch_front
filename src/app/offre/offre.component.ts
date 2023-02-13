import { Component, OnInit, Input } from '@angular/core';
import { Offre } from '../models/offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  // title!: string;
  // description!: string;
  // dateDebut!: Date;
  // dateFin!: Date;

  @Input() offre!: Offre;

  constructor() { }

  ngOnInit() {
    this.offre = {
      id: 1,
      titre: 'Développeur Angular',
      description: 'Nous recherchons un développeur Angular pour un projet de 3 mois',
      dateDebut: new Date('2020-01-01'),
      dateFin: new Date('2020-01-01'),
      salaire: 3000,
    };
  }

}
