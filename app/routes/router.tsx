"use client";
import { Navbar } from "@/components/nav/Navbar";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import AuthController from "../auth/authController";
import { Fetching } from "../auth/test-caffito";
export const Router = ({ children }: { children: React.ReactNode }) => {
  const Role = useAppSelector((state) => state.userLogReducer.Role);

  let content;

  switch (Role) {
    case "Admin":
      content = (
        <>
          <Navbar />
          <div className="flex p-3 bg-slate-100 w-full h-full">{children}</div>
        </>
      );
      break;

    case "Seller":
      content = (
        <>
          <p>Seller</p>
          <div className="flex p-3 bg-slate-100 w-full h-full">{children}</div>
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
