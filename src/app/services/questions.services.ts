import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cons, Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { Constantes } from '../constantes';

@Injectable ({
    providedIn: 'root'
})

export class QuestionsService {

    // constructor() { }
    constructor(private http: HttpClient, private constantes : Constantes) { }

    getAllQuestions(): Observable<Question[]> {
        var url = this.constantes.API_BASE_URL + "/profilsearch/question/all";
        return this.http.get<Question[]>(url);
    }

    createQuestion(question: Question): Observable<Question> {
        var url = this.constantes.API_BASE_URL + "/profilsearch/question/create";
        return this.http.post<Question>(url, question);
    }

}