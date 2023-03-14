import { Component, OnInit, Input } from '@angular/core';
import { Offre } from '../../models/offre.model';
import { Reponse } from '../../models/reponse.model';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../../services/offres.services';
import { Candidature } from '../../models/candidature.model';
import { CandidaturesService } from '../../services/candidatures.services';
import { MatDialog } from '@angular/material/dialog';
import { ModalCandidatureComponent } from '../modal-candidature/modal-candidature.component';
@Component({
  selector: 'app-page-offre-admin',
  templateUrl: './page-offre-admin.component.html',
  styleUrls: ['./page-offre-admin.component.scss']
})
export class PageOffreAdminComponent implements OnInit {


  @Input () offre!: Offre;

  constructor(private route: ActivatedRoute, private offresService: OffresService, private candidaturesService: CandidaturesService, private dialog: MatDialog) { }

  candidatures!: Candidature[];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.offresService.getOffreById(id).subscribe((offre) => {
        this.offre = offre;
        console.log("Offre :: " + offre)
        console.log("Questions :: " + offre.questions.at(0))
      })

      this.candidaturesService.getCandidaturesByOffreId(id).subscribe((candidatures) => {
        this.candidatures = candidatures;
        console.log("Candidatures :: " + candidatures)
      })
    }

    

  }
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }  

  openDialog(index: number) {
    console.log(this.candidatures)
    
    console.log(index)
    const dialogRef = this.dialog.open(ModalCandidatureComponent, {
      data: {
        candidature: this.candidatures[index]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}