import * as CryptoJS from "crypto-js";

export const encryptToMD5 = (toEncrypt: string): string => {
  const valueBytes = CryptoJS.enc.Utf8.parse(toEncrypt);
  const hash = CryptoJS.MD5(valueBytes);
  const result = hash.toString(CryptoJS.enc.Hex);

  return result;
};
