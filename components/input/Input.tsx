import React from "react";

interface InputProps {
  title: string;
  attribute: string;
  placeholder?: string;
  value?: string | number;
  form: {};
  setForm: React.Dispatch<React.SetStateAction<{}>>;
}
export const Input = ({
  setForm,
  form,
  title,
  attribute,
  placeholder,
  value,
}: InputProps) => {
  return (
    <div className="pb-4 pt-2 pr-4 w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        {title}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-50 hover:bg-slate-50 transition-all duration-300 ease-in-out"
        id="username"
        value={value && value}
        autoComplete="off"
        type="text"
        placeholder={placeholder || ""}
        onChange={(e) => setForm({ ...form, [attribute]: e.target.value })}
      />
    </div>
  );
};
