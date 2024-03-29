import React, { ReactNode } from "react";

interface BtnProps {
  text: string;
  action: () => void;
  type: string;
  disabled?: boolean;
  marginRigth?: any;
}

const Btn: React.FC<BtnProps> = ({
  text,
  action,
  type,
  disabled,
  marginRigth,
}) => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className={`hover:filter hover:shadow-lg hover:scale-105 text-slate-100 rounded max-w-[200px] max-h-10 flex items-center justify-between py-2 px-2 border transition ${
        type === "close"
          ? "bg-red-500 "
          : type === "save"
          ? "bg-sky-500 "
          : type === "white"
          ? "bg-white text-black "
          : type === "info" && "bg-sky-500"
      } ${disabled && "pointer-events-none opacity-40"} ${
        marginRigth && `mr-[5px]`
      }`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Btn;
