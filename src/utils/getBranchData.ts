import { getRealm } from "../database/realm";

const getBranchData = async () => {
  const realm = await getRealm();
  try {
    const response = realm.objects("FilialSchema");
    if (response.length > 0) {
      console.log(response);
    }
  } catch (error) {
    console.log("Não foi possível carregar os cadastrados -->", error);
  } finally {
    realm.close();
  }
};

export default getBranchData;
