import { getRealm } from "../database/realm";

const obterDadosFilial = async () => {
  try {
    const realm = await getRealm();
    const response = realm.objects("FilialSchema");
    return response.length > 0 ? response : null;
  } catch (error) {
    console.log("Não foi possível carregar os cadastrados -->", error);
  }
};

export { obterDadosFilial };
