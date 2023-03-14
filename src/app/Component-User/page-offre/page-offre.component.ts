import { Component, OnInit, Input } from '@angular/core';
import { Offre } from '../../models/offre.model';
import { Reponse } from '../../models/reponse.model';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../../services/offres.services';
import { Candidature } from '../../models/candidature.model';
import { CandidaturesService } from '../../services/candidatures.services';
@Component({
  selector: 'app-page-offre',
  templateUrl: './page-offre.component.html',
  styleUrls: ['./page-offre.component.scss']
})
export class PageOffreComponent implements OnInit {

  @Input () offre!: Offre;

  constructor(private route: ActivatedRoute, private offresService: OffresService, private candidaturesService: CandidaturesService) { }

  candidature: Candidature = new Candidature(0, '', '', '', { id: 0 }, []);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.offresService.getOffreById(id).subscribe((offre) => {
        this.offre = offre;
        console.log("Offre :: " + offre)
        console.log("Questions :: " + offre.questions.at(0))

        for (let i = 0; i < this.offre.questions.length; i++) {
          this.candidature.reponses.push(new Reponse(0, '', this.offre.questions[i]));
        }
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
    this.candidature.offre.id = this.offre.id;

    this.candidaturesService.createCandidature(this.candidature).subscribe((candidature) => {
      console.log("Candidature :: " + candidature);
    })

  }
}
