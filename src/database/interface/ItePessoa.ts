import Realm from "realm";

export interface ItePessoa {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
  Codigo: number | null;
  Nome: string | null;
  Fantasia: string | null;
  CnpjCpf: string | null;
  Endereco: string | null;
  Numero: number | null;
  Complemento: string | null;
  Proximidade: string | null;
  Bairro: string | null;
  Cep: string | null;
  Cidade: string | null;
  Email: string | null;
  Telefone: string | null;
  Observacao: string | null;
  Tipo: string | null;
  HandleTabela: number | null;
  Uf: string | null;
  HandleUsuario: number | null;
  Insc: string | null;
  Bloqueado: number | null;
  ObservacaoPessoa: string | null;
  HandleCondicao: number | null;
}

export type ItePessoaObject = ItePessoa & Realm.Object;
