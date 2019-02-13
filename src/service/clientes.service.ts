import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { ClientesDTO } from 'src/model/clientes.dto';

@Injectable()
export class ClientesService  {

    constructor(
        protected http: HttpClient
    ) {}

    findAll (): Observable<ClientesDTO[]> {
        return this.http.get<ClientesDTO[]>(`${API_CONFIG.baseUrl}/clientes`);
    }

    findById (id: number): Observable<ClientesDTO[]> {
        return this.http.get<ClientesDTO[]>(`${API_CONFIG.baseUrl}/clientes/` + id);
    }
}
