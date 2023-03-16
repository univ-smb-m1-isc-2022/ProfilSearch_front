import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constantes } from '../../constantes';


@Component({
  selector: 'app-oauth2-redirect-handler-component',
  templateUrl: './oauth2-redirect-handler-component.component.html',
  styleUrls: ['./oauth2-redirect-handler-component.component.scss']
})
  
export class OAuth2RedirectHandlerComponent implements OnInit {
  token!: string;
  error!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.token = this.getUrlParameter('token');
    this.error = this.getUrlParameter('error');
    if (this.token) {
      localStorage.setItem('ACCESS_TOKEN', this.token);
      this.router.navigate(['/profile'], { queryParamsHandling: 'merge' });
    } else {
      this.router.navigate(['/login'], {
        queryParams: { error: this.error },
        queryParamsHandling: 'merge'
      });
    }
  }

  getUrlParameter(name: string): string {
      name = name.replace(/[[]/, '\[').replace(/[]]/, '\]');
      const regex = new RegExp('[\?&]' + name + '=([^&#]*)');
      const results = regex.exec(this.route.snapshot.queryParamMap.toString());
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  

}


