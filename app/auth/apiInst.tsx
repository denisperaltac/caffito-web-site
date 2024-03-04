import axios from "axios";

const BASE_URL = "http://test.caffito.com.ar";

const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.request.use((request) => {
  request.headers!["authenticate"] = "";
  return request;
});

export default apiInstance;
