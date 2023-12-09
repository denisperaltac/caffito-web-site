"use client";
import { Navbar } from "@/components/nav/Navbar";
import { authUser } from "@/redux/features/userLogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

export const Router = ({ children }: { children: React.ReactNode }) => {
  const Role = useAppSelector((state) => state.userLogReducer.Role);
  const dispatch = useAppDispatch();
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
          <p
            onClick={() => dispatch(authUser({ Role: "Admin", Name: "Denis" }))}
          >
            Log in
          </p>
        </>
      );
      break;
  }

  return content;
};
