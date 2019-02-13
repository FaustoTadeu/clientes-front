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

  displayedColumns = ['idCliente', 'nomeCliente', 'cpfCliente', 'sexoCliente', 'idVendedor'];

  dataSource : ClientesDTO[];

  @Input() recebeVendedor;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    if(this.recebeVendedor == undefined) {
    this.findAllClientes();
    } else {
      this.dataSource = this.recebeVendedor;
    }
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
  filtrar($event) {
    console.log($event);

  }
}
