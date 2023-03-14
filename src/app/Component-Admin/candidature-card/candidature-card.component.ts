import { Component, OnInit, Input } from '@angular/core';
import { Candidature } from '../../models/candidature.model';

@Component({
  selector: 'app-candidature-card',
  templateUrl: './candidature-card.component.html',
  styleUrls: ['./candidature-card.component.scss']
})
export class CandidatureCardComponent implements OnInit {

    @Input() candidature!: Candidature;


  constructor() { }

  ngOnInit(): void {
  }

}
