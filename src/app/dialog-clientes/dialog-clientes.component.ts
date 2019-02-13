import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  nomeVendedor: string;
  cpfVendedor: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog-clientes',
  templateUrl: './dialog-clientes.component.html',
  styleUrls: ['/dialog-clientes.component.css'],
})

export class DialogClientesComponent {

  nomeVendedor: string;
  cpfVendedor: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogClientesDialog, {
      width: '600px',
      data: {nomeVendedor: this.nomeVendedor, cpfVendedor: this.cpfVendedor}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nomeVendedor = result;
    });
  }
}

@Component({
  selector: 'dialog-clientes-dialog',
  templateUrl: './dialog-clientes-dialog.html',
})
export class DialogClientesDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogClientesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
