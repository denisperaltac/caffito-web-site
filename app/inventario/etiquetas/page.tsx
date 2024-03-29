"use client";
import { useState } from "react";
import EtiquetasComponent from "./component";

export default function EtiquetasPage() {
  const [form, setForm] = useState({});
  const [resp, setResp] = useState(["Loading"]);
  const [disabledPaginator, setDisabledPaginator] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(20);
  const [size, setSize] = useState(20);
  const onSubmit = () => {};
  return (
    <EtiquetasComponent
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
    />
  );
}
