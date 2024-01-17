import React, { useId } from "react";

interface InputProps {
  title: string;
  attribute: string;
  placeholder?: string;
  value?: boolean;
  form: {};
  setForm: React.Dispatch<React.SetStateAction<{}>>;
}

export const InputCheck = ({
  setForm,
  form,
  title,
  attribute,
  placeholder,
  value,
}: InputProps) => {
  const id = useId();
  return (
    <div className="mb-4 mt-2 mr-4 w-fit items-center justify-center flex flex-col ">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
      </label>
      <input
        className="shadow w-8 h-8 cursor-pointer hover:scale-105  transition-all duration-200 ease-in-out"
        id={id}
        autoComplete="off"
        type="checkbox"
        checked={value || false}
        placeholder={placeholder || "..."}
        onChange={(e) => setForm({ ...form, [attribute]: e.target.checked })}
      />
    </div>
  );
};
