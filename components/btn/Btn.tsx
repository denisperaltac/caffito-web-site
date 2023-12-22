import React, { ReactNode } from "react";

interface BtnProps {
  text: string;
  action: () => void;
  type: string;
}

const Btn: React.FC<BtnProps> = ({ text, action, type }) => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className={`flex items-center justify-center py-1 px-2 border transition ${
        type === "close"
          ? "bg-red-500 hover:bg-red-700 text-white rounded"
          : type === "save"
          ? "bg-green-500 hover:bg-green-700 text-white rounded"
          : type === "white" && "bg-white hover:bg-slate-700 text-black rounded"
      }`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Btn;
