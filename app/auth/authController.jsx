import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"; // Importa el hook useDispatch
import axiosInstance, { setBearer } from "@/config/axiosConfig";
import { baseURL } from "@/config/axiosConfig";
import { Auth } from "./Auth";
import { authUser } from "@/redux/features/userLogSlice";

const AuthController = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const onSubmit = () => {
    setIsLoading(true);
    axiosInstance
      .post(`${baseURL}/api/authenticate`, form)
      .then((response) => {
        setBearer(response?.data?.id_token);
        getApiData(response?.data?.id_token);
      })
      .catch((err) => console.log("Error log in"))
      .finally(() => setIsLoading(false));
  };

  const getApiData = (BearerCode) => {
    axiosInstance
      .get(`${baseURL}/api/account`)
      .then((response) => {
        dispatch(
          authUser({
            Role: response?.data?.login,
            Name: response?.data?.firstName,
            Bearer: BearerCode,
          })
        );
      })
      .catch((err) => console.log("Error getting user data"));
  };

  return (
    <Auth
      onSubmit={onSubmit}
      message={message}
      setIsLoading={setIsLoading}
      isLoading={isLoading}
      setForm={setForm}
      form={form}
    />
  );
};
export default AuthController;
