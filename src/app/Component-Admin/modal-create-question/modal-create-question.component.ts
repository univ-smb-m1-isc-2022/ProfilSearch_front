import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions.services';

@Component({
  selector: 'app-modal-create-question',
  templateUrl: './modal-create-question.component.html',
  styleUrls: ['./modal-create-question.component.scss']
})
export class ModalCreateQuestionComponent implements OnInit {

  constructor(private questionService: QuestionsService, private dialogRef: MatDialogRef<ModalCreateQuestionComponent>) { }

  question: Question = new Question(0, '');

  ngOnInit(): void {
  }

  create() {
    console.log(this.question)
    this.questionService.createQuestion(this.question).subscribe((question) => {
      this.question = question;
      this.dialogRef.close(this.question);
    }
    )    

  }

}
