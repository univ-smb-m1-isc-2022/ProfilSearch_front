import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable ({
    providedIn: 'root'
})

export class QuestionsService {

    // constructor() { }
    constructor(private http: HttpClient) { }

    getAllQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>('http://localhost:8080/profilsearch/question/all');
    }

    createQuestion(question: Question): Observable<Question> {
        return this.http.post<Question>('http://localhost:8080/profilsearch/question/create', question);
    }

}