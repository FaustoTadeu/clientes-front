import {Component, Inject, Output, EventEmitter, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { VendedoresService } from 'src/service/vendedores.service';
import { VendedoresDTO } from 'src/model/vendedores.dto';

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

  @Output() reloadTable: EventEmitter<object> = new EventEmitter();

  @Input() data: VendedoresDTO;
  @Input() dataDelete: VendedoresDTO;
  constructor(public dialog: MatDialog, 
              private vendedoresService: VendedoresService) {}

  ngOnChanges() {
    if(this.data != undefined) {
      this.openDialog();
    } else if(this.dataDelete != undefined) {
     const r =  confirm("Deseja realmente apagar este Vendedor?");
     if (r == true){
      this.vendedoresService.deleteVendedor(this.dataDelete).subscribe(
        response => {
          this.reloadTable.emit({
            atualizar: true
          });
        },
        error => {
          console.log(error);
        });
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVendedoresDialog, {
      width: '400px',
      data: {
        idVendedor: this.data == undefined ? undefined : this.data.idVendedor, 
        nomeVendedor: this.data == undefined ? undefined : this.data.nomeVendedor, 
        cpfVendedor: this.data == undefined ? undefined : this.data.cpfVendedor
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => { 
      this.reloadTable.emit({
        atualizar: true
      });
     this.data = undefined;
     this.dataDelete = undefined;
    });
  }
}

@Component({
  selector: 'dialog-vendedores-dialog',
  templateUrl: './dialog-vendedores-dialog.html',
})
export class DialogVendedoresDialog {

  constructor(private vendedoresService: VendedoresService,
    public dialogRef: MatDialogRef<DialogVendedoresDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvarVendedor(data) {
    if(data != undefined) {
      if (data.nomeVendedor == '' || data.nomeVendedor == undefined ) {
          alert('Nome nao pode ser vazio');
      } else if (data.cpfVendedor == '' || data.cpfVendedor == undefined) {
        alert('CPF nao pode ser vazio');
      } else {
        this.vendedoresService.addOrEditVendedor(data).subscribe(
          response => {
          },
          error => {
            console.log(error);
          });
      }
    }
  }
}
