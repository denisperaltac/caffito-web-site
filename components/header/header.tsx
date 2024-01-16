import React from "react";

export const Header = ({ title, children }: any) => {
  return (
    <header className="mb-4 flex justify-between w-full">
      <h1 className="pl-2 text-center text-2xl text-sky-900">{title}</h1>
      {children}
    </header>
  );
};
