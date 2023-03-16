import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public localService: LocalService, private authService: AuthService) { }

  name: string = '';
  email: string = '';
  imageUrl: string = '';
  


  ngOnInit(): void {
    if (this.localService.getData('accessToken')) {
      this.name = this.localService.getData('name') as string;
      this.email = this.localService.getData('email') as string;
      this.imageUrl = this.localService.getData('imageUrl') as string;
    }
  }

  logout() {
    console.log("logout")
    this.authService.logout();
  }

}
