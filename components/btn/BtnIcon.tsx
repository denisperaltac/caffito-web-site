import React, { ReactNode } from "react";

interface BtnIconProps {
  text?: string;
  children?: ReactNode;
  action: () => void;
}

const BtnIcon: React.FC<BtnIconProps> = ({ text, children, action }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="bg-primary-green-hover hover:filter hover:brightness-75 text-gray-800 rounded max-w-[150px] max-h-8 flex items-center justify-center py-2 px-2 border transition"
    >
      {children}
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default BtnIcon;
