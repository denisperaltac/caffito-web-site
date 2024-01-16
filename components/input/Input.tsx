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
    <div className="mb-4 mt-2 mr-4 ">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        {title}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        value={value && value}
        autoComplete="off"
        type="text"
        placeholder={placeholder || "..."}
        onChange={(e) => setForm({ ...form, [attribute]: e.target.value })}
      />
    </div>
  );
};
