import {Component, Inject, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ClientesService } from 'src/service/clientes.service';
import { ClientesDTO } from 'src/model/clientes.dto';
import { VendedoresService } from 'src/service/vendedores.service';

export interface DialogData {
  nomeCliente: string;
  cpfCliente: string;
  sexoCliente: string;
  vendedorCliente:string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog-clientes',
  templateUrl: './dialog-clientes.component.html',
  styleUrls: ['/dialog-clientes.component.css'],
})

export class DialogClientesComponent implements OnInit {

  @Output() reloadTable: EventEmitter<object> = new EventEmitter();

  @Input() dataCliente: ClientesDTO;
  @Input() dataDeleteCliente: ClientesDTO;

  vendedoresList;

  constructor(public dialog: MatDialog, 
              private clientesService: ClientesService,
              private vendedoresService: VendedoresService
              ) {
              }

  ngOnInit(){
   this.findAllVendedores();
  }

  ngOnChanges() {
    if(this.dataCliente != undefined) {
      this.openDialog();
    } else if(this.dataDeleteCliente != undefined) {
     const r =  confirm("Deseja realmente apagar este Cliente?");
     if (r == true){
      this.clientesService.deleteCliente(this.dataDeleteCliente).subscribe(
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
    const dialogRef = this.dialog.open(DialogClientesDialog, {
      width: '400px',
      data: {
        idCliente: this.dataCliente == undefined ? undefined : this.dataCliente.idCliente, 
        nomeCliente: this.dataCliente == undefined ? undefined : this.dataCliente.nomeCliente, 
        cpfCliente: this.dataCliente == undefined ? undefined : this.dataCliente.cpfCliente,
        sexoCliente: this.dataCliente == undefined ? undefined : this.dataCliente.sexoCliente,
        vendedorCliente: this.dataCliente == undefined ? undefined : this.dataCliente.vendedorCliente,
        vendedoresList: this.vendedoresList
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => { 
      this.reloadTable.emit({
        atualizar: true
      });
     this.dataCliente = undefined;
     this.dataDeleteCliente = undefined;
    });
  }

  findAllVendedores(){
    this.vendedoresService.findAll().subscribe(
      response => {
        this.vendedoresList = response
              },
      error => {
        console.log(error);
      });
  }
}

@Component({
  selector: 'dialog-clientes-dialog',
  templateUrl: './dialog-clientes-dialog.html',
})
export class DialogClientesDialog {

  constructor(private clientesService: ClientesService,
    public dialogRef: MatDialogRef<DialogClientesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvarCliente(data) {
    if(data != undefined) {
      if (data.nomeCliente == '' || data.nomeCliente == undefined ) {
          alert('Nome nao pode ser vazio');
      } else if (data.cpfCliente == '' || data.cpfCliente == undefined) {
        alert('CPF nao pode ser vazio');
      } else if (data.sexoCliente == '' || data.sexoCliente == undefined){
        alert('O sexo deve ser selecionado');
      } else if (data.vendedorCliente == '' || data.vendedorCliente == undefined) {
        alert ('O vendedor deve ser selecionado');
      } else {
        this.clientesService.addOrEditCliente(data).subscribe(
          response => {
          },
          error => {
            console.log(error);
          });
      }
    }
  }
}
