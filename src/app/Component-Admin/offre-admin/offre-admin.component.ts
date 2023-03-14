import { Component, OnInit, Input } from '@angular/core';
import { Offre } from '../../models/offre.model';
import { Reponse } from '../../models/reponse.model';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../../services/offres.services';
import { Candidature } from '../../models/candidature.model';
import { CandidaturesService } from '../../services/candidatures.services';

@Component({
  selector: 'app-offre-admin',
  templateUrl: './offre-admin.component.html',
  styleUrls: ['./offre-admin.component.scss']
})
export class OffreAdminComponent implements OnInit {

 @Input() offre!: Offre;

  constructor() { }

  ngOnInit() {
    console.log(this.offre);
  }
}