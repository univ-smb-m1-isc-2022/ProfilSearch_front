import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Offre } from '../../models/offre.model';
import { Reponse } from '../../models/reponse.model';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../../services/offres.services';
import { Candidature } from '../../models/candidature.model';
import { CandidaturesService } from '../../services/candidatures.services';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

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

  constructor(private route: ActivatedRoute, private offresService: OffresService, private candidaturesService: CandidaturesService, private cdRef: ChangeDetectorRef, private dialogRef: MatDialog) { }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    const imgElement = document.getElementById('offre-image') as HTMLImageElement;
    console.log(imgElement)
    if (imgElement)
      imgElement.src = this.imageUrl;
    // refresh the view
    imgElement.src = this.imageUrl;
  }

  candidature: Candidature = new Candidature(0, '', '', '', { id: 0 }, []);


    ngOnInit(): void {
    
      // if (!window.location.hash) {
      // window.location.hash = 'loaded';
      // window.location.reload();
      // }

    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      
      this.offresService.getOffreById(id).subscribe((offre) => {
        this.offre = offre;
        console.log(offre)

        const imgElement = document.getElementById('offre-image') as HTMLImageElement;

        if (imgElement && this.offre.image) {
          imgElement.src = this.offre.imageUrl;
          const blob = new Blob([new Uint8Array(this.offre.image)], { type: 'image/jpeg' });
          const imageUrl = URL.createObjectURL(blob);

          this.offre.imageUrl = imageUrl;
          imgElement.src = this.offre.imageUrl;

          this.imageFile = this.base64ToBlob(this.offre.image.toString());
          this.imageUrl = URL.createObjectURL(this.imageFile);

          console.log("url : " + this.imageUrl)


        } else {
          var div = document.getElementById('div-image');
          if (div)
            div.style.display = 'none';
        }
          
        for (let i = 0; i < this.offre.questions.length; i++) {
          this.candidature.reponses.push(new Reponse(0, '', this.offre.questions[i]));
        }

        // const imgElement = document.getElementById('offre-image') as HTMLImageElement;
        // console.log(imgElement)
        // if (imgElement)
        //   imgElement.src = this.imageUrl;
      })

      console.log(this.offre)

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

    this.openDialog();
    this.candidaturesService.createCandidature(this.candidature).subscribe((candidature) => {
      console.log("Candidature :: " + candidature);
    })
  }
    
openDialog(): void {
  const dialog = this.dialogRef.open(ModalConfirmationComponent, {

    data: {
      redirectTo: '/',
      confirmationText: 'Votre candidature a bien été envoyée.'
    },
    disableClose: true
  });
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
  

  formatDate() {
    var date = new Date(this.offre.creation_date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var monthString = '' + month;
    var dayString = '' + day;
    if (day < 10) {
      dayString = '0' + day;
    }
    if (month < 10) {
      monthString = '0' + month;
    }
    
    return dayString + '/' + monthString + '/' + year;
  }

}
