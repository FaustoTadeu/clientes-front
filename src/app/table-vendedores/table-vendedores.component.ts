import { Component, OnInit, Input } from '@angular/core';
import { VendedoresDTO } from '../../model/vendedores.dto';
import { VendedoresService } from 'src/service/vendedores.service';
import { ClientesService } from 'src/service/clientes.service';


@Component({
  selector: 'app-table-vendedores',
  templateUrl: './table-vendedores.component.html',
  styleUrls: ['./table-vendedores.component.css']
})
export class TableVendedoresComponent implements OnInit {
  
  displayedColumns = ['idVendedor', 'nomeVendedor', 'cpfVendedor'];

  dataSource : VendedoresDTO[];
  @Input() vendedorCliente: any;

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

  filtroClientes (element) {
    this.vendedorCliente = element;
  }
}