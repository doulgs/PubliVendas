import Realm from "realm";

export interface ItePessoa {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
  Codigo: number;
  Nome: string;
  Fantasia: string;
  CnpjCpf: string;
  Endereco: string;
  Numero: number;
  Complemento: string;
  Proximidade: string;
  Bairro: string;
  Cep: string;
  Cidade: string;
  Email: string;
  Telefone: string;
  Observacao: string;
  Tipo: string;
  HandleTabela: number;
  Uf: string;
  HandleUsuario: number;
  Insc: string;
  Bloqueado: number;
  ObservacaoPessoa: string;
  HandleCondicao: number;
}

export type ItePessoaObject = ItePessoa & Realm.Object;
