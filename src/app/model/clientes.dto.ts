import { VendedoresDTO } from './vendedores.dto';

export interface ClienteDTO {
    idCliente: number;
    nomeCliente : string;
    cpfCliente : number;
    sexoCliente : string;
    vendedorCliente: VendedoresDTO;
}