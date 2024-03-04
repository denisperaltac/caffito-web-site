"use client";
import React, { useEffect, useState } from "react";
import AuthController from "../app/auth/authController";
import { Navbar } from "@/components/nav/Navbar";
import { useSelector } from "react-redux";
import { Loader } from "@/components/loader/Loader";

export const Router = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const Role = useSelector((state: any) => state?.auth?.Role);

  useEffect(() => {
    // Simular una carga asincrónica de datos
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Aquí puedes ajustar el tiempo de espera según tus necesidades
  }, []);

  if (loading) {
    return <Loader loading={loading}></Loader>; // Muestra un indicador de carga mientras se recuperan los datos del estado de Redux
  }

  let content;

  switch (Role) {
    case "admin":
      content = (
        <>
          <Navbar />

          <div className="mainContainer flex p-3  w-full h-full">
            {children}
          </div>
        </>
      );
      break;

    case "seller":
      content = (
        <>
          <p>Seller</p>
          <div className="flex p-3  w-full h-full">{children}</div>
        </>
      );
      break;

    default:
      content = (
        <>
          <AuthController />
        </>
      );
      break;
  }

  return content;
};
