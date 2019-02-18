import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ClientesDTO } from '../../model/clientes.dto';
import { ClientesService } from 'src/service/clientes.service';
import { VendedoresService } from 'src/service/vendedores.service';
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

  clientesList: ClientesDTO[];

  vendedoresList: VendedoresDTO[];

  constructor(private clientesService: ClientesService, private vendedoresService: VendedoresService) { }

  ngOnInit() {
   this.clientesService.clientesObs.subscribe(dataSource => this.dataSource = dataSource);
   this.findAllClientes(); 
  }

  findAllClientes() {
    this.vendedoresService.findAll().subscribe(
      responseVendedores => {
        this.vendedoresList = responseVendedores;

        this.clientesService.findAll().subscribe(
          response => {
            let i = 0;
            response.forEach(element => {
              let vendedor =  this.vendedoresList.filter(x => x.idVendedor == element.idVendedor)[0];  
              response[i].nomeVendedor = vendedor.nomeVendedor;
              i++;
            });
             this.dataSource = response;
          },
          error => {
            console.log(error);
          });

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
}
