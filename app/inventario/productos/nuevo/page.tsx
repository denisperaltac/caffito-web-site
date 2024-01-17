"use client";

import { useState } from "react";
import { NewProductComponent } from "./component";

export default function NewProductPage() {
  const [form, setForm] = useState({});

  return <NewProductComponent form={form} setForm={setForm} />;
}
