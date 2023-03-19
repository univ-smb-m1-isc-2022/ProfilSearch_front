import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
export class PageOffreComponent implements OnInit, AfterViewInit {

  @Input () offre!: Offre;
  offreImageURL!: string;
  imageFile = new Blob();
  imageUrl = '';

  constructor(private route: ActivatedRoute, private offresService: OffresService, private candidaturesService: CandidaturesService) { }
  ngAfterViewInit(): void {
    const imgElement = document.getElementById('offre-image') as HTMLImageElement;
        console.log(imgElement)
        if (imgElement)
          imgElement.src = this.imageUrl;
  }

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
        this.imageFile = this.base64ToBlob(this.offre.image.toString());
        this.imageUrl = URL.createObjectURL(this.imageFile);

      //   const imgElement = document.getElementById('offre-image') as HTMLImageElement;
      //   console.log(imgElement)
      //   if (imgElement)
      //     imgElement.src = this.imageUrl;
      })

    }
    
    this.ngAfterViewInit();
    

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


getOffreImageURL(): string {
  if (this.offre && this.offre.image) {
    if (!this.offreImageURL) {
      if (Array.isArray(this.offre.image)) {
        const base64String = btoa(String.fromCharCode.apply(null, Array.from(this.offre.image)));
        this.offreImageURL = 'data:image/jpeg;base64,' + base64String;
      } else {
        console.error('La propriété "image" de l\'offre doit être un tableau d\'entiers.');
      }
    }
    return this.offreImageURL;
  }
  return '';
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
