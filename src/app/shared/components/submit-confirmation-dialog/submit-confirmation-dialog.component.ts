import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-submit-confirmation-dialog',
  templateUrl: './submit-confirmation-dialog.component.html',
  styleUrl: './submit-confirmation-dialog.component.scss',
  imports: [MatDialogModule, MatButtonModule]
})
export class SubmitConfirmationDialogComponent implements OnInit {
    title;
    message;
    closeEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(@Inject(MAT_DIALOG_DATA) data: any,
                public dialogRef: MatDialogRef<SubmitConfirmationDialogComponent>

    ) {
        this.title = data.title;
        this.message = data.message;
    }

    ngOnInit(): void {
    }

    confirm(value: boolean): void {
        this.closeEventEmitter.emit(value);
        this.dialogRef.close();
    }
}
