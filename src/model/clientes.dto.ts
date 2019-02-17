import { VendedoresDTO } from './vendedores.dto';

export interface ClientesDTO {
    idCliente: number;
    nomeCliente : string;
    cpfCliente : number;
    sexoCliente : string;
    vendedorCliente: number;
    vendedorClienteList: VendedoresDTO[];
}