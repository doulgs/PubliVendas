import api from "../services/api";

async function getToken() {
  try {
    const response = await api.post("/token", {
      grant_type: "password",
      username: "integracao",
      password: "pbl@1991",
    });
    const token = response.data.access_token;
    return token;
  } catch (err) {
    console.error("Erro na solicitação de token:", err);
  }
}

export { getToken };
