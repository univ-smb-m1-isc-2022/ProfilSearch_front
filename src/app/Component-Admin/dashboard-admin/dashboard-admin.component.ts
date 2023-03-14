import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.services';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  offres$!: Observable<Offre[]>;

  constructor(private offresService : OffresService) { }

  ngOnInit(): void {

    this.offres$ = this.offresService.getAllOffres();
  }

}
