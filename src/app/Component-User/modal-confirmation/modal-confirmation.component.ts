import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<ModalConfirmationComponent>) { }

  ngOnInit(): void {
    setTimeout(() => {
      // fermer la modal
      this.dialogRef.close();
      this.router.navigate(['/']);
    }, 2000);
  }

}
