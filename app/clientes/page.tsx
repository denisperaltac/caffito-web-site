"use client";
import { useState } from "react";
import ClientesComponent from "./component";

export default function ClientesPage() {
  const [form, setForm] = useState({});
  const [resp, setResp] = useState(["Loading"]);
  const [disabledPaginator, setDisabledPaginator] = useState(false);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(20);
  const [size, setSize] = useState(20);
  const onSubmit = () => {};
  return (
    <ClientesComponent
      setForm={setForm}
      form={form}
      page={page}
      count={count}
      setPage={setPage}
      onSubmit={onSubmit}
      resp={resp}
      setDisabledPaginator={setDisabledPaginator}
      disabledPaginator={disabledPaginator}
      size={size}
      setSize={setSize}
      setOpen={setOpen}
      open={open}
    />
  );
}
