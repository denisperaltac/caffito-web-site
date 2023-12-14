import React, { ReactNode } from "react";

interface BtnIconProps {
  text: string;
  children: ReactNode;
}

const BtnIcon: React.FC<BtnIconProps> = ({ text, children }) => {
  return (
    <button
      type="button"
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded max-w-[150px] max-h-8 flex items-center justify-center py-2 px-2 border transition"
    >
      {children}
      <span>{text}</span>
    </button>
  );
};

export default BtnIcon;
