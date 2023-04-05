import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Offre } from '../../models/offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit, AfterViewInit {
  // title!: string;
  // description!: string;
  // dateDebut!: Date;
  // dateFin!: Date;


  @Input() offre!: Offre;
  imageFile = new Blob();
  imageUrl = '';

  constructor() { }
  ngAfterViewInit(): void {
  if (this.offre.image != null) {
        this.imageFile = this.base64ToBlob(this.offre.image.toString());
        this.imageUrl = URL.createObjectURL(this.imageFile);
        console.log(this.offre)
        const imgElement = document.getElementById('offre-image' + this.offre.id) as HTMLImageElement;
        // console.log(imgElement)
        if (imgElement)
          imgElement.src = this.imageUrl;
        console.log(this.offre.imageUrl)
    }
  }

  ngOnInit() {
    // console.log(this.offre);

   
    
    
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
