import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { ClientesDTO } from 'src/model/clientes.dto';

@Injectable()
export class ClientesService  {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
    constructor(
        protected http: HttpClient
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
}
