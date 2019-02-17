import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ClientesDTO } from '../../model/clientes.dto';
import { ClientesService } from 'src/service/clientes.service';
import { VendedoresDTO } from 'src/model/vendedores.dto';

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html',
  styleUrls: ['./table-clientes.component.css']
})
export class TableClientesComponent implements OnInit {

  displayedColumns = ['idCliente', 'nomeCliente', 'cpfCliente', 'sexoCliente', 'idVendedor', 'actionsColumn'];

  dataCliente : ClientesDTO;

  dataDeleteCliente: ClientesDTO;

  dataSource : ClientesDTO[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
   this.findAllClientes();
  }

  findAllClientes() {
    this.clientesService.findAll().subscribe(
      response => {
        this.dataSource = response;
      },
      error => {
        console.log(error);
      });

  }

  reloadTable($event) {
    this.findAllClientes();
  }

  edit(element) {
    this.dataCliente = element;
  } 

  delete(element) {
    this.dataDeleteCliente = element;
  }
  filtrar($event) {
    console.log($event);

  }
}
