import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidature } from 'src/app/models/candidature.model';

@Component({
  selector: 'app-modal-candidature',
  templateUrl: './modal-candidature.component.html',
  styleUrls: ['./modal-candidature.component.scss']
})
  
export class ModalCandidatureComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { candidature: Candidature }, private dialog: MatDialog) { }
  
  candidature!: Candidature;

  ngOnInit(): void {
    this.candidature = this.data.candidature;
    console.log(this.candidature)
  }

  close() {
    this.dialog.closeAll();
  }

  submit() {
    // Do something
    this.dialog.closeAll();
  }
}
