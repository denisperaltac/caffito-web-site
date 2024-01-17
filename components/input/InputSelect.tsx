import React from "react";

interface InputProps {
  title: string;
  attribute: string;
  placeholder?: string;
  value?: { [key: string]: any };
  form: { [key: string]: any };
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
    <div className="mb-4 mt-2 mr-4 w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="selectInput"
      >
        {title}
      </label>
      <select
        className="shadow border rounded w-full py-[6px] pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  dark:text-black cursor-pointer hover:bg-slate-50 transition-all duration-300 ease-in-out"
        id="selectInput"
        placeholder={placeholder || "select option"}
        value={form[attribute] || ""}
        onChange={(e) => setForm({ ...form, [attribute]: e.target.value })}
      >
        <option value="" disabled hidden>
          {placeholder || ""}
        </option>
        {options.map((e: any, i: number) => (
          <option value={e.value} key={i}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
  );
};
