import { Offre } from '../../models/offre.model';
import { Question } from '../../models/question.model';
import { OffresService } from '../../services/offres.services';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.services';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateQuestionComponent } from '../modal-create-question/modal-create-question.component';
import { ModalConfirmationComponent } from 'src/app/Component-User/modal-confirmation/modal-confirmation.component';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.scss']
})
export class CreateOffreComponent implements OnInit {

  constructor(private offresService: OffresService, private questionsService : QuestionsService, private router: Router, private dialog: MatDialog, private dialogRef: MatDialog, private localService : LocalService) { }

  offre: Offre = new Offre(0, '', '', new Date(), new Date(), new Date(), 0, '', '', [], [], '', true);
  newQuestion: Question = new Question(0, '');
  bulletPoints: string[] = [];
  bulletControls: FormControl[] = [];

  // liste de questions
  listquestions: Question[] = [];
  // questions: Question[] = [];
  nbQuestion: number = 0;

  ngOnInit(): void {
    
    if (this.localService.getData('accessToken') == null) {
      this.router.navigate(['/login']);
    }

    this.questionsService.getAllQuestions().subscribe((listquestions) => {
      this.listquestions = listquestions;
    })
    this.bulletPoints = ['', '', ''];

    this.bulletPoints.forEach(bullet => {
      this.bulletControls.push(new FormControl(bullet));
    });

  }

  creerOffre() {
    console.log(this.offre)
    for (let i = 0; i < this.bulletControls.length; i++) {
      this.offre.bullets.push(this.bulletControls[i].value);
    }

    // enlever les bullet points vides
    this.offre.bullets = this.offre.bullets.filter(bullet => bullet !== '');

    if (this.offre.name.trim() === '' || this.offre.description.trim() === '' || this.offre.place.trim() === '') {
      let message = document.getElementById('error-field');
      if (message) message.innerHTML = "Tous les champs doivent être renseignés !";
      console.log("Tous les champs doivent être renseignés !");
    return;
    }

    console.log(this.offre)
    this.offresService.createOffre(this.offre).subscribe((offre) => {
      this.offre = offre;
      this.openDialog();

    },
      (error) => {
        let message = document.getElementById('error-field');
        if (message) message.innerHTML = "Une erreur est survenue, veuillez réessayer. Attention l'image ne dois pas être trop lourde.";
        console.log(error);
      }
    )
    // this.router.navigate(['/admin']);
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
    var dialogRef = this.dialog.open(ModalCreateQuestionComponent);

    dialogRef.afterClosed().subscribe((question) => {
      if (question) {
        this.listquestions.push(question);
      }
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
    this.bulletControls.push(new FormControl(''));
  }

  openDialog(): void {
    const dialog = this.dialogRef.open(ModalConfirmationComponent, {

    data: {
      redirectTo: '/admin',
      confirmationText: 'Votre offre a bien été créée.'
    },
    disableClose: true
  });
}


}
