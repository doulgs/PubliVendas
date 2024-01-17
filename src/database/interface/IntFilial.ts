import Realm from "realm";

export interface IntFilial {
  Handle: number;
  Nome: string;
  Razao: string;
  Fone: string;
  CnpjCpf: string;
  NomeSite: string;
  Endereco: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  Cep: string;
  Cidade: string;
  Estado: string;
}

export type IntFilialObject = IntFilial & Realm.Object;
