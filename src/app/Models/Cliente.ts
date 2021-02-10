import { ImagemCliente } from "./ImagemCliente";

export class Cliente {
    id: number;
    cpf: string;
    rg: string;
    dataNascimento: Date;
    espelhoCnh: string;
    dataAutorizacaoEmissao: Date;
    fotoPerfil: string;
    clienteEstado: number;
    imagemCliente: ImagemCliente = new ImagemCliente();
}