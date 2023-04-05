import { Component, OnInit } from '@angular/core';
import { Invitation } from 'src/app/models/invitation.model';
import { InvitationService } from 'src/app/services/invitation.services';

@Component({
  selector: 'app-invite-page',
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.scss']
})
export class InvitePageComponent implements OnInit {

  constructor(private invitationService: InvitationService) { }

  invitation: Invitation = new Invitation(0, '');
  

  ngOnInit(): void {
  }

  invite() {
    this.invitationService.createInvitation(this.invitation).subscribe((invitation) => {
      this.invitation = invitation;
      }
    )
    // ajoute un message de confirmation
    var div = document.getElementById("confirmation") as HTMLDivElement;
    div.innerHTML = "Invitation envoyée";


    
  }

}
