import { Offre } from '../models/offre.model';
import { Question } from '../models/question.model';
import { OffresService } from '../services/offres.services';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.services';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.scss']
})
export class CreateOffreComponent implements OnInit {

  constructor(private offresService: OffresService, private questionsService : QuestionsService) { }

  offre: Offre = new Offre(0, '', '', new Date(), new Date(), new Date(), 0, '', '', []);
  // liste de questions
  listquestions: Question[] = [];
  questions: Question[] = [];
  nbQuestion: number = 0;

  ngOnInit(): void {
    this.questionsService.getAllQuestions().subscribe((listquestions) => {
      this.listquestions = listquestions;
    })
  }

  creerOffre() {
    console.log(this.questions)
    console.log(this.offre)
  }

  ajouterQuestion() {
    this.nbQuestion++;
    this.ajouterQuestionTableau();
  }

  ajouterQuestionTableau() {
    const nouvelleQuestion = { id: this.offre.questions.length + 1, question: ''};
    this.offre.questions.push(nouvelleQuestion);
    console.log(this.offre.questions)
  }
  
  modifierQuestion(questionIndex: number) {
    var question = this.offre.questions[questionIndex].question;
    var nouvelleQuestion = new Question(questionIndex, question)
    this.offre.questions[questionIndex] = nouvelleQuestion;
  }

  getQuestionsArray(nbQuestions: number): number[] {
    return Array(nbQuestions).fill(0).map((x, i) => i);
  }

}
