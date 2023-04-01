import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
export class PageOffreAdminComponent implements OnInit, AfterViewInit {


  @Input () offre!: Offre;
  offreImageURL!: string;
  imageFile = new Blob();
  imageUrl = '';

  constructor(private route: ActivatedRoute, private offresService: OffresService, private candidaturesService: CandidaturesService, private dialog: MatDialog) { }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    const imgElement = document.getElementById('offre-image') as HTMLImageElement;
    console.log(imgElement)
    if (imgElement)
      imgElement.src = this.imageUrl;
    // refresh the view
    imgElement.src = this.imageUrl;
  }
  candidatures!: Candidature[];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.offresService.getOffreById(id).subscribe((offre) => {
        this.offre = offre;
        console.log("Offre :: " + offre)
        console.log("Questions :: " + offre.questions.at(0))

        const imgElement = document.getElementById('offre-image') as HTMLImageElement;

        if (imgElement && this.offre.image) {
          imgElement.src = this.offre.imageUrl;
          const blob = new Blob([new Uint8Array(this.offre.image)], { type: 'image/jpeg' });
          const imageUrl = URL.createObjectURL(blob);

          this.offre.imageUrl = imageUrl;
          imgElement.src = this.offre.imageUrl;

          this.imageFile = this.base64ToBlob(this.offre.image.toString());
          this.imageUrl = URL.createObjectURL(this.imageFile);


        } else {
          var div = document.getElementById('div-image');
          if (div)
            div.style.display = 'none';
        }


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

  base64ToBlob(base64: string): Blob {
  const binaryString = atob(base64);
  const array = [];
  for (let i = 0; i < binaryString.length; i++) {
    array.push(binaryString.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }
  
  createImageUrlFromBlob(blob: Blob): string {
  return URL.createObjectURL(blob);
}



}