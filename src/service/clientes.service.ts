import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { ClientesDTO } from 'src/model/clientes.dto';
import { VendedoresService } from './vendedores.service';
import { VendedoresDTO } from 'src/model/vendedores.dto';

@Injectable()
export class ClientesService  {

  private clientesSource = new BehaviorSubject<ClientesDTO[]>(undefined);
  clientesObs = this.clientesSource.asObservable();

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
    constructor(
        protected http: HttpClient,
        private vendedoresService: VendedoresService
    ) {}

    findAll (): Observable<ClientesDTO[]> {
        return this.http.get<ClientesDTO[]>(`${API_CONFIG.baseUrl}/clientes`);
    }

    findById (id: number): Observable<ClientesDTO[]> {
        return this.http.get<ClientesDTO[]>(`${API_CONFIG.baseUrl}/clientes/` + id);
    }

    addOrEditCliente (result): Observable<ClientesDTO> {
    const cliente = { 
        idCliente: result.idCliente, 
        nomeCliente: result.nomeCliente,
        cpfCliente: result.cpfCliente,
        sexoCliente: result.sexoCliente,
        idVendedor: result.vendedorCliente
     } 

    if(result.idCliente != undefined) {
        return this.http.put<ClientesDTO>(`${API_CONFIG.baseUrl}/clientes/` + cliente.idCliente, cliente, this.httpOptions);
      } else { 
        return this.http.post<ClientesDTO>(`${API_CONFIG.baseUrl}/clientes`, cliente, this.httpOptions);
      }
    }
  
    deleteCliente(result) {
      return this.http.delete<ClientesDTO>(`${API_CONFIG.baseUrl}/clientes/` + result.idCliente, this.httpOptions);
    }

    findByIdVendedor (idVendedor: number): Observable<ClientesDTO[]> {
      return this.http.get<ClientesDTO[]>(`${API_CONFIG.baseUrl}/clientes/vendedor/` + idVendedor, this.httpOptions);
   }

   changeClientesList (idVendedor: number, selected:Boolean) {
     let listaVendedores: VendedoresDTO[];
    this.vendedoresService.findAll().subscribe(
      responseVendedoresList => {
      listaVendedores = responseVendedoresList;
      if(selected) {
        this.findByIdVendedor(idVendedor).subscribe(
          response => {
           let i = 0;
           response.forEach(element => {
             const vendedor = listaVendedores.filter(x => x.idVendedor == element.idVendedor)[0]; 
             response[i].nomeVendedor = vendedor.nomeVendedor;
             i++;
            });
            this.clientesSource.next(response);
          },
          error => {
            console.log(error);
          });
      } else {
        this.findAll().subscribe(
          response => {
            let i = 0;
           response.forEach(element => {
             let vendedor = listaVendedores.filter(x => x.idVendedor = element.idVendedor)[0];
             response[i].nomeVendedor = vendedor.nomeVendedor; 
             i++;         
            });
            this.clientesSource.next(response);
          },
          error => {
            console.log(error);
          });
      }
      },
      error => {
        console.log(error);
      });
  }
  }
