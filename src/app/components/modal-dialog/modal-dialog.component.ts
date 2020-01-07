import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  content: number;
  size: number;
  yes: string;
  no: string;
}


@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal-dialog.component.html',
  styleUrls: ['modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  @Input() title;
  @Input() content;
  @Input() size;
  @Input() type;
  @Input() linkText;
  private yes = 'Si';
  private no = 'No';
  constructor(public dialog: MatDialog) { }

  openDialog(title, content, size): void {
    console.log(title, content, size);
    const dialogRef = this.dialog.open(ModalDialogContent, {
      width: size + 'px',
      data: { title, content, yes: this.yes, no: this.no }
    });
    console.log('dialogRef: ', dialogRef);

  }

}

@Component({
  selector: 'app-modal-dialog-content',
  templateUrl: 'modal-dialog-content.html',
})
export class ModalDialogContent {

  constructor(
    public dialogRef: MatDialogRef<ModalDialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onClick(e): void {
    console.log('click', e);
    this.dialogRef.close();
  }

}
