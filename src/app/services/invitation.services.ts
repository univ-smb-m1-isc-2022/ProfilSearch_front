import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cons, Observable } from 'rxjs';
import { Invitation } from '../models/invitation.model';
import { Constantes } from '../constantes';


@Injectable ({
    providedIn: 'root'
})

export class InvitationService {

    // constructor() { }
    constructor(private http: HttpClient, private constantes: Constantes) { }

    createInvitation(invitation: Invitation): Observable<Invitation> {
        console.log("Invitation :: " + invitation)
        var url = this.constantes.API_BASE_URL + "/profilsearch/invitation/create";
        return this.http.post<Invitation>(url, invitation);
    }

}