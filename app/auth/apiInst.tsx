import axios from "axios";

const BASE_URL = "https://caffito.com.ar/api/authenticate";

const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.request.use((request) => {
  request.headers!["authenticate"] = ""; // Aqui va el fucking token de tu mama
  return request;
});

export default apiInstance;
