import { Cargo } from "./cargo";

export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    perfil: string;
    foto?: string;
    senha: string;
    cargo: Cargo;
}
