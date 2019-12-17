import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  content: string;
}


@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal-dialog.component.html',
  styleUrls: ['modal-dialog.component.scss'],
})
export class ModalDialogComponent {

  title: 'titulo';
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita iusto, ex placeat veritatis laboriosam quam, soluta libero necessitatibus molestiae vel nam nobis commodi voluptas, earum quos repellat? Natus, dolor!';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogContent, {
      width: '250px',
      data: { title: this.title, content: this.content }
    });

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
