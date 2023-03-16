import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Offre } from 'src/app/models/offre.model';
import { LocalService } from 'src/app/services/local.service';
import { OffresService } from 'src/app/services/offres.services';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  offres$!: Observable<Offre[]>;

  name: string = '';
  email: string = '';
  imageUrl: string = '';
  

  constructor(private offresService: OffresService, private localService: LocalService) { }

  ngOnInit(): void {

    this.offres$ = this.offresService.getAllOffres();
    if (this.localService.getData('accessToken')) {
      this.name = this.localService.getData('name') as string;
      this.email = this.localService.getData('email') as string;
      this.imageUrl = this.localService.getData('imageUrl') as string;
    }
  }

}
