import React from "react";

interface InputProps {
  title: string;
  attribute: string;
  placeholder?: string;
  value?: string | number;
  form: {};
  setForm: React.Dispatch<React.SetStateAction<{}>>;
  options: any;
}
export const InputSelect = ({
  setForm,
  form,
  title,
  attribute,
  placeholder,
  options,
}: InputProps) => {
  return (
    <div className="mb-4 mt-2 mr-4 ">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="selectInput"
      >
        {title}
      </label>
      <select
        className="shadow border rounded w-full py-[6px] pl-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-black "
        id="selectInput"
        placeholder={placeholder || "..."}
        onChange={(e) => setForm({ ...form, [attribute]: e.target.value })}
      >
        {options.map((e: any) => {
          return (
            <option value={e.value} selected={e.selected}>
              {e.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
