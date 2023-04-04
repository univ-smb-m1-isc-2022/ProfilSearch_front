import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from '../models/offre.model';
import { map } from 'rxjs/operators';
import { Constantes } from '../constantes';

@Injectable ({
    providedIn: 'root'
})

export class OffresService {

    // constructor() { }
    constructor(private http: HttpClient, private constantes : Constantes) { }

  getAllOffres(): Observable<Offre[]> {
      var url = this.constantes.API_BASE_URL + "/profilsearch/offre/all";
        var offres = this.http.get<Offre[]>(url);
        offres.forEach(offre => {
            offre.forEach(offreU => {
                if (offreU.image != null) {
                    var imageFile = this.base64ToBlob(offreU.image.toString());
                    var imageUrl = this.createImageUrlFromBlob(imageFile);
                    offreU.imageUrl = imageUrl;
                }
                
            })
        });

        return offres;
    }

  getOffreById(id: string): Observable<Offre> {
    var url = this.constantes.API_BASE_URL + "/profilsearch/offre/" + id;
  return this.http.get<Offre>(url).pipe(
    map((offreU: Offre) => {
    //   console.log("ici");
    //   console.log(offreU.image);
      if (offreU.image != null) {
        // console.log("la");
        var imageFile = this.base64ToBlob(offreU.image.toString());
        var imageUrl = this.createImageUrlFromBlob(imageFile);
        offreU.imageUrl = imageUrl;
        // console.log("set image url");
      }
      return offreU;
    })
  );
}

  createOffre(offre: Offre): Observable<Offre> {
      var url = this.constantes.API_BASE_URL + "/profilsearch/offre/create";
        return this.http.post<Offre>(url, offre);
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