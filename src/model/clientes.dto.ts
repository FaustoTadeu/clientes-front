import { VendedoresDTO } from './vendedores.dto';

export interface ClientesDTO {
    idCliente: number;
    nomeCliente : string;
    cpfCliente : number;
    sexoCliente : string;
    idVendedor: number;
    nomeVendedor?: string;
    vendedorClienteList?: VendedoresDTO[];
}