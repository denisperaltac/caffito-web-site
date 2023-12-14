import React, { ReactNode } from "react";

interface BtnProps {
  text: string;
  action: () => void;
}

const Btn: React.FC<BtnProps> = ({ text, action }) => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className="bg-red-500 hover:bg-red-700 text-white rounded  flex items-center justify-center py-2 px-2 border transition"
    >
      <span>{text}</span>
    </button>
  );
};

export default Btn;
