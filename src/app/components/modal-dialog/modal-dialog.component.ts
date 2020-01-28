import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    title: string;
    content: number;
    size: number;
    yes: string;
    no: string;
    modalStyle: any;
    modalContent: any;
}

@Component({
    selector: 'niji-modal-dialog',
    templateUrl: 'modal-dialog.component.html',
    styleUrls: ['modal-dialog.component.scss'],
})
export class ModalDialogComponent {
    @Input() title;
    @Input() content;
    @Input() size;
    @Input() type;
    @Input() modalStyle;
    @Input() modalContent;
    @Input() linkText;

    private yes = 'Si';
    private no = 'No';
    public MAX_LICENCES: 5;
    public customClass = '';
    constructor(public dialog: MatDialog) { }

    openDialog(title, content, size, modalStyle): void {
        if (this.type === 'help') {
            this.customClass = 'custom-dialog-container';
        }
        const dialogRef = this.dialog.open(ModalDialogContent, {
            width: size,
            maxWidth: size,
            data: { title, content, yes: this.yes, no: this.no, modalStyle, modalContent: this.modalContent },
            panelClass: this.customClass
        });
    }

}

@Component({
    selector: 'niji-modal-dialog-content',
    templateUrl: 'modal-dialog-content.html',
})
export class ModalDialogContent {

    constructor(
        public dialogRef: MatDialogRef<ModalDialogContent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onClick(e): void {
        this.dialogRef.close();
    }

}
