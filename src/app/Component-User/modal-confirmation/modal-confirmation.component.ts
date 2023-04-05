import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {

  confirmationText: string;
  redirectTo: string;


  constructor(private router: Router, private dialogRef: MatDialogRef<ModalConfirmationComponent>,@Inject(MAT_DIALOG_DATA) private data: { confirmationText: string, redirectTo: string }
  ) {
    this.confirmationText = data.confirmationText;
    this.redirectTo = data.redirectTo;
  }


  ngOnInit(): void {
    setTimeout(() => {
      // fermer la modal
      this.dialogRef.close();
      this.router.navigate([this.redirectTo]);
    }, 2000);
  }

}
