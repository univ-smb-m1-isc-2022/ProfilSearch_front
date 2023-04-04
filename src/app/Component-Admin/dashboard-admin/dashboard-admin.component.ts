import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Offre } from 'src/app/models/offre.model';
import { LocalService } from 'src/app/services/local.service';
import { OffresService } from 'src/app/services/offres.services';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  offres$!: Observable<Offre[]>;
  users!: User[];

  name: string = '';
  email: string = '';
  imageUrl: string = '';
  

  constructor(private offresService: OffresService, private localService: LocalService, private cd: ChangeDetectorRef, private router: Router, private authService: AuthService) { }
    // if (this.localService.getData('name') == null) {
    //   location.reload();
    // }
  //  }

  

  ngOnInit(): void {

      if (!window.location.hash) {
        window.location.hash = 'loaded';
        window.location.reload();
      }

    this.offres$ = this.offresService.getAllOffres();

    console.log('accessToken:', this.localService.getData('accessToken'))
    console.log(this.localService.getAllData())
    console.log(localStorage.getItem('email'))

    console.log('name:', this.localService.getData('name'))

      

    if (this.localService.getData('accessToken')) {

      var token = this.localService.getData('accessToken') as string;

      this.authService.getUserInfo(token);


      console.log('name:', this.localService.getData('name'))
      this.name = this.localService.getData('name') as string;
      this.email = this.localService.getData('email') as string;
      this.imageUrl = this.localService.getData('imageUrl') as string;
    }

    console.log('name:', this.name)
    console.log('email:', this.email)
    console.log('imageUrl:', this.imageUrl)

    this.authService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      }
    )




    // forcer un refresh de la page
    this.cd.detectChanges();
  }

  ngAfterViewInit() {
    if (this.localService.getData('accessToken')) {
      console.log('name:', this.localService.getData('name'))
      this.name = this.localService.getData('name') as string;
      this.email = this.localService.getData('email') as string;
      this.imageUrl = this.localService.getData('imageUrl') as string;
    }
  }


}
