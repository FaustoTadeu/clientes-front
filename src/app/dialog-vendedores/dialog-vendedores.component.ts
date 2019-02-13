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
  selector: 'app-dialog-vendedores',
  templateUrl: './dialog-vendedores.component.html',
  styleUrls: ['/dialog-vendedores.component.css'],
})

export class DialogVendedoresComponent {

  nomeVendedor: string;
  cpfVendedor: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVendedoresDialog, {
      width: '250px',
      data: {nomeVendedor: this.nomeVendedor, cpfVendedor: this.cpfVendedor}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.nomeVendedor = result;
      console.log(result);
    });
  }
}

@Component({
  selector: 'dialog-vendedores-dialog',
  templateUrl: './dialog-vendedores-dialog.html',
})
export class DialogVendedoresDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogVendedoresDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  inserirVendedor() {
    console.log("Passei");
    
  }

}
