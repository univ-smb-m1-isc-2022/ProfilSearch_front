import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Candidature } from '../models/candidature.model';
import { CandidaturesService } from '../services/candidatures.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-candidature',
  templateUrl: './delete-candidature.component.html',
  styleUrls: ['./delete-candidature.component.scss']
})
export class DeleteCandidatureComponent implements OnInit {

  token!: string;
  candidature!: Candidature;
  
  constructor(private route: ActivatedRoute, private router: Router, private candidatureService: CandidaturesService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.token = this.route.snapshot.paramMap.get('id') as string;
      // this.candidatureService.getCandidatureByToken(this.token).subscribe(
      //   (data) => {
      //     this.candidature = data;
      //   }
      // );

      this.candidatureService.deleteCandidature(this.token).subscribe(
        (data) => {
        },
        (error) => {
          alert("Cette candidature n'existe pas, ou a déjà été supprimée");
          // attendre 2 secondes avant de rediriger vers la page d'accueil
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        }
      );
      
    } else {
      this.router.navigate(['/']);

    }
  }

}
