import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  offres$!: Observable<Offre[]>;
  offresAffiches$!: Observable<Offre[]>;
  searchTerm: string = '';

  constructor(private offresService : OffresService) { }

  ngOnInit(): void {

    this.offres$ = this.offresService.getAllOffres();
    this.offresAffiches$ = this.offres$;
    this.sortOffre();
  }

  search() {
    this.offresAffiches$ = this.offres$.pipe(
      map(offres => offres.filter(offre => offre.name.toLowerCase().includes(this.searchTerm.toLowerCase())))
    );
    console.log(this.offresAffiches$)
  }

  sortOffre() {
    this.offresAffiches$ = this.offres$.pipe(
      map(offres => offres.filter(offre => offre.published === true))
    );


  }


}
