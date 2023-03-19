import { Offre } from '../../models/offre.model';
import { Question } from '../../models/question.model';
import { OffresService } from '../../services/offres.services';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.scss']
})
export class CreateOffreComponent implements OnInit {

  constructor(private offresService: OffresService, private questionsService : QuestionsService, private router: Router) { }

  offre: Offre = new Offre(0, '', '', new Date(), new Date(), new Date(), 0, '', '', [], [], '');
  newQuestion: Question = new Question(0, '');
  bulletPoints: string[] = [];

  // liste de questions
  listquestions: Question[] = [];
  // questions: Question[] = [];
  nbQuestion: number = 0;

  ngOnInit(): void {
    this.questionsService.getAllQuestions().subscribe((listquestions) => {
      this.listquestions = listquestions;
    })
    this.bulletPoints = ['', '', ''];
  }

  creerOffre() {
    console.log(this.offre)
    this.offresService.createOffre(this.offre).subscribe((offre) => {
      this.offre = offre;
    }
    )
    this.router.navigate(['/admin']);
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
  
  modifierQuestion(questionIndex: number, event: Event) {
    var idQuestion = (event.target as HTMLSelectElement).selectedIndex;

    var question = this.listquestions[idQuestion];

    this.offre.questions[questionIndex] = question;
  }

  getQuestionsArray(nbQuestions: number): number[] {
    return Array(nbQuestions).fill(0).map((x, i) => i);
  }

  createQuestion() {
    this.questionsService.createQuestion(this.newQuestion).subscribe((newQuestion) => {
      this.listquestions.push(newQuestion);
      this.newQuestion = new Question(0, '');
    })
  }

  onFileSelected(event : any) {
      const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const arrayBuffer = reader.result as ArrayBuffer;
    const byteArray = new Uint8Array(arrayBuffer);
    this.offre.image = Array.from(byteArray);
  };
  reader.readAsArrayBuffer(file);
  }

  addBulletPoint() {
    this.bulletPoints.push('');
    console.log(this.bulletPoints)
  }

}
