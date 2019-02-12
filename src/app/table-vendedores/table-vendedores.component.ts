import { Component, OnInit } from '@angular/core';
import { VendedoresDTO } from '../model/vendedores.dto';

@Component({
  selector: 'app-table-vendedores',
  templateUrl: './table-vendedores.component.html',
  styleUrls: ['./table-vendedores.component.css']
})
export class TableVendedoresComponent implements OnInit {

  ELEMENT_DATA: VendedoresDTO[] = [
    {idVendedor: 1, nomeVendedor: 'Hydrogen', cpfVendedor: 10079},
    {idVendedor: 2, nomeVendedor: 'Hydrogen', cpfVendedor: 10079},
    {idVendedor: 3, nomeVendedor: 'Hydrogen', cpfVendedor: 10079},
    {idVendedor: 4, nomeVendedor: 'Hydrogen', cpfVendedor: 10079},
    {idVendedor: 5, nomeVendedor: 'Hydrogen', cpfVendedor: 10079},
    {idVendedor: 6, nomeVendedor: 'Hydrogen', cpfVendedor: 10079}
  ];

  title = "Hello World";

  displayedColumns = ['idVendedor', 'nomeVendedor', 'cpfVendedor'];

  dataSource : VendedoresDTO[];

  constructor() { }

  ngOnInit() {
    this.dataSource = this.ELEMENT_DATA;
  }
}
