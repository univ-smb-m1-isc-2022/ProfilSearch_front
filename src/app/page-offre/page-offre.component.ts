import { Component, OnInit, Input } from '@angular/core';
import { Offre } from '../models/offre.model';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../services/offres.services';
import { Candidature } from '../models/candidature.model';
import { CandidaturesService } from '../services/candidatures.services';
@Component({
  selector: 'app-page-offre',
  templateUrl: './page-offre.component.html',
  styleUrls: ['./page-offre.component.scss']
})
export class PageOffreComponent implements OnInit {

  @Input () offre!: Offre;

  constructor(private route: ActivatedRoute, private offresService: OffresService, private candidaturesService: CandidaturesService) { }

  candidature: Candidature = new Candidature(0, '', '', '', 0);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.offresService.getOffreById(id).subscribe((offre) => {
        this.offre = offre;
        console.log("Offre :: " + offre)
        console.log("Questions :: " + offre.questions.at(0))
      })
    }
  }
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }  

  postuler(): void {
    console.log("Postuler");
    this.candidature.id_offre = this.offre.id;
    console.log(this.candidature);

    this.candidaturesService.createCandidature(this.candidature);

  }
}
