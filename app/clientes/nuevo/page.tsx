"use client";

import { useState } from "react";
import { NewClientComponent } from "./component";

export default function NewClientPage() {
  const [form, setForm] = useState({});

  return <NewClientComponent form={form} setForm={setForm} />;
}
