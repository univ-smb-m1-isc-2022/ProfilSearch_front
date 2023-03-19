import { Component, OnInit } from '@angular/core';
import {
  fader,
  slider
} from './route-animations';
import { RouterOutlet } from '@angular/router';
import { LocalService } from './services/local.service';
import { AuthService } from './services/auth.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
  ]
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private localService: LocalService, private authService: AuthService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit() {
    // this is a test
      this.localService.saveData('authenticated', 'false');
      this.localService.saveData('currentUser', 'null');
      this.localService.saveData('loading', 'true');
      
      // Récupérer les valeurs du localStorage
      const authenticated = this.localService.getData('authenticated');
      const currentUser = this.localService.getData('currentUser');
      const loading = this.localService.getData('loading');

      // Afficher les valeurs dans la console
      console.log('authenticated:', authenticated);
      console.log('currentUser:', currentUser);
      console.log('loading:', loading);
    
    

  }


  loadCurrentlyLoggedInUser() {
    this.authService.getCurrentUser()
    .toPromise()
    .then(response => {
      this.localService.saveData('currentUser', response);
      this.localService.saveData('authenticated', 'true');
      this.localService.saveData('loading', 'false');
    }).catch(error => {
      this.localService.saveData('loading', 'false');
    });    
  }

  handleLogout() {
    this.localService.saveData('authenticated', 'false');
    this.localService.saveData('currentUser', 'null');
    this.localService.saveData('accessToken', 'null');
    //this.alertService.success("You're safely logged out!");
  }

}
