import { Component, OnInit } from '@angular/core';
import { Invitation } from 'src/app/models/invitation.model';

@Component({
  selector: 'app-invite-page',
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.scss']
})
export class InvitePageComponent implements OnInit {

  constructor() { }

  invitation: Invitation = new Invitation(0, '');

  ngOnInit(): void {
  }

  invite() {
    console.log(this.invitation)
  }

}
