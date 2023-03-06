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
    console.log(this.offre);
  }
}
