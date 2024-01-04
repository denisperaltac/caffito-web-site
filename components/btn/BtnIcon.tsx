import React, { ReactNode } from "react";

interface BtnIconProps {
  text?: string;
  children?: ReactNode;
  action: () => void;
  disabled?: boolean;
}

const BtnIcon: React.FC<BtnIconProps> = ({
  text,
  children,
  action,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={action}
      className={`bg-primary-green-hover hover:filter hover:brightness-75 text-gray-800 rounded max-w-[200px] max-h-8 flex items-center justify-between py-2 px-2 border transition ${
        disabled && "pointer-events-none opacity-30"
      }`}
    >
      {children}
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default BtnIcon;
