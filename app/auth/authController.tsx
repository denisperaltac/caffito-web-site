"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "@/config/axiosConfig";
import { Auth } from "./Auth";
import { useAppDispatch } from "@/redux/hooks";
import { authUser } from "@/redux/features/userLogSlice";
import apiInstance from "./apiInst";
import { Fetching } from "./test-caffito";

const AuthController = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});

  // Fetching();

  const onSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log("Tu mama"));

    Fetching();
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
