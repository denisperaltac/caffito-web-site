"use client";
import { useState } from "react";
import VentasComponent from "./component";

export default function VentasPage() {
  const [form, setForm] = useState({});
  const [resp, setResp] = useState(["Loading"]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(20);
  const [size, setSize] = useState(20);
  const onSubmit = () => {};
  return (
    <VentasComponent
      setForm={setForm}
      form={form}
      page={page}
      count={count}
      setPage={setPage}
      onSubmit={onSubmit}
      resp={resp}
      size={size}
      setSize={setSize}
      setOpen={setOpen}
      open={open}
    />
  );
}
