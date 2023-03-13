import { Offre } from '../models/offre.model';
import { OffresService } from '../services/offres.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.scss']
})
export class CreateOffreComponent implements OnInit {

  constructor(private offresService: OffresService) { }

  offre: Offre = new Offre(0, '', '', new Date(), new Date(), new Date(), 0, '', '', []);


  ngOnInit(): void {
  }

}
