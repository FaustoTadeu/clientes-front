import { Component, Input } from '@angular/core';
import { ClientesService } from 'src/service/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vendedores e Clientes da Engineering do Brasil'
}
