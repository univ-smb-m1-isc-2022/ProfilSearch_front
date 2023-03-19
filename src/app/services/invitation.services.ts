import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from '../models/invitation.model';


@Injectable ({
    providedIn: 'root'
})

export class InvitationService {

    // constructor() { }
    constructor(private http: HttpClient) { }

    createInvitation(invitation: Invitation): Observable<Invitation> {
        console.log("Invitation :: " + invitation)
        return this.http.post<Invitation>('http://localhost:8080/profilsearch/invitation/create', invitation);
    }

}