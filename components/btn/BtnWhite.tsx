import React from "react";

interface BtnWhiteProps {
  text: string;
  action: () => void;
}

const BtnWhite: React.FC<BtnWhiteProps> = ({ text, action }) => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 hover:border-transparent rounded max-w-[150px] max-h-8 flex items-center justify-center font-semibold py-2 px-2 border transition"
    >
      <p>{text}</p>
    </button>
  );
};

export default BtnWhite;
