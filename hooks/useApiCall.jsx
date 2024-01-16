import axiosInstance from "@/config";
import { useState } from "react";

export const useApiCall = ({ route, form, queryParams, method }) => {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(100);

  const fetchData = () => {
    setResponse(100);
    axiosConfig = {
      method,
      url: `${axiosInstance.baseURL}/${route}${queryParams ? queryParams : ""}`,
      data: form,
    };

    axiosInstance(axiosConfig)
      .then((res) => {
        setData(res.data);
        setResponse(200);
      })
      .catch((err) => {
        setResponse(err.status);
      });
  };

  return { data, response, fetchData };
};
