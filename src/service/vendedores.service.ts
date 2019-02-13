import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendedoresDTO } from 'src/model/vendedores.dto';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class VendedoresService  {

    constructor(
        protected http: HttpClient
    ) {}


    findAll (): Observable<VendedoresDTO[]> {
        return this.http.get<VendedoresDTO[]>(`${API_CONFIG.baseUrl}/vendedores`);
    }

    findById (id: number): Observable<VendedoresDTO[]> {
        return this.http.get<VendedoresDTO[]>(`${API_CONFIG.baseUrl}/vendedores/` + id);
    }
}
