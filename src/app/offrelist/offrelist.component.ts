import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Offre } from '../models/offre.model';
import { OffresService } from '../services/offres.services';

@Component({
  selector: 'app-offrelist',
  templateUrl: './offrelist.component.html',
  styleUrls: ['./offrelist.component.scss']
})
export class OffrelistComponent implements OnInit {

  offres$!: Observable<Offre[]>;

  constructor(private offresService : OffresService) { }

  ngOnInit(): void {

    this.offres$ = this.offresService.getAllOffres();
    console.log("offre", this.offres$.forEach(
      (offre) => console.log(offre)
    ))
  }

}
