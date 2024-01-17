import React, { ReactNode } from "react";

interface BtnIconProps {
  text?: string;
  children?: ReactNode;
  action?: () => void;
  disabled?: boolean;
  type?: string;
}

const BtnIcon: React.FC<BtnIconProps> = ({
  text,
  children,
  action,
  disabled,
  type,
}) => {
  return (
    <>
      {type === "Save" && (
        <button
          type="button"
          onClick={action}
          className={`bg-sky-500 hover:filter hover:shadow-lg hover:scale-105 text-slate-100 rounded max-w-[200px] max-h-8 flex items-center justify-between py-2 px-2 border transition ${
            disabled && "pointer-events-none opacity-30"
          }`}
        >
          {children}
          <span className="ml-2">{text}</span>
        </button>
      )}
      {type === "Cancel" && (
        <button
          type="button"
          onClick={action}
          className={`bg-gray-600 hover:filter hover:shadow-lg hover:scale-105 text-slate-100 rounded max-w-[200px] max-h-10 flex items-center justify-between py-2 px-2 border transition ${
            disabled && "pointer-events-none opacity-30"
          }`}
        >
          {children}
          <span className="ml-2 ">{text}</span>
        </button>
      )}
    </>
  );
};

export default BtnIcon;
