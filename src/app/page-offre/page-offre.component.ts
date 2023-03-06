import { Component, OnInit, Input } from '@angular/core';
import { Offre } from '../models/offre.model';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../services/offres.services';
@Component({
  selector: 'app-page-offre',
  templateUrl: './page-offre.component.html',
  styleUrls: ['./page-offre.component.scss']
})
export class PageOffreComponent implements OnInit {

  @Input () offre!: Offre;

  constructor(private route: ActivatedRoute, private offresService: OffresService) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.offresService.getOffreById(id).subscribe((offre) => {
        this.offre = offre;
        console.log("Offre :: " + offre)
      })
    }
  }
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }  
}
