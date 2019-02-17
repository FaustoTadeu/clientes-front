import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendedoresDTO } from 'src/model/vendedores.dto';
import { API_CONFIG } from 'src/config/api.config';
import { HttpHeaders } from '@angular/common/http';
import { throws } from 'assert';

@Injectable()
export class VendedoresService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor(
        protected http: HttpClient
    ) {}

    findAll (): Observable<VendedoresDTO[]> {
        return this.http.get<VendedoresDTO[]>(`${API_CONFIG.baseUrl}/vendedores`, this.httpOptions);
    }

    findById (id: number): Observable<VendedoresDTO[]> {
        return this.http.get<VendedoresDTO[]>(`${API_CONFIG.baseUrl}/vendedores/` + id, this.httpOptions);
    }

    addOrEditVendedor (result): Observable<VendedoresDTO> {
      if(result.idVendedor != undefined) {
        return this.http.put<VendedoresDTO>(`${API_CONFIG.baseUrl}/vendedores/` + result.idVendedor, result, this.httpOptions);
      } else { 
        return this.http.post<VendedoresDTO>(`${API_CONFIG.baseUrl}/vendedores`, result, this.httpOptions);
      }
    }

    deleteVendedor(result) {
      return this.http.delete<VendedoresDTO>(`${API_CONFIG.baseUrl}/vendedores/` + result.idVendedor, this.httpOptions);
    }
}
