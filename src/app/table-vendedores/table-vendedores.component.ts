import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VendedoresDTO } from '../../model/vendedores.dto';
import { VendedoresService } from 'src/service/vendedores.service';
import { ClientesService } from 'src/service/clientes.service';

@Component({
  selector: 'app-table-vendedores',
  templateUrl: './table-vendedores.component.html',
  styleUrls: ['./table-vendedores.component.css']
})
export class TableVendedoresComponent implements OnInit {
  
  displayedColumns = ['idVendedor', 'nomeVendedor', 'cpfVendedor', 'actionsColumn'];

  data : VendedoresDTO;

  dataDelete: VendedoresDTO;

  dataSource : VendedoresDTO[];

  constructor(private vendedoresService: VendedoresService,
              private clientesService: ClientesService) { }

  ngOnInit() {
    this.findAllVendedores();
  }

  findAllVendedores() {
    this.vendedoresService.findAll().subscribe(
      response => {
        this.dataSource = response;
      },
      error => {
        console.log(error);
      });
  }

  reloadTable($event) {
    this.findAllVendedores();
  }

  edit(element) {
    this.data = element;
  } 

  delete(element) {
    this.dataDelete = element;
  }

  filtroClientes(element) {
    
  }

}