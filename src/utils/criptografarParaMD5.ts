import { enc, MD5 } from "crypto-js";

export const criptografarParaMD5 = (toEncrypt: string): string =>
  MD5(enc.Utf8.parse(toEncrypt)).toString(enc.Hex);
