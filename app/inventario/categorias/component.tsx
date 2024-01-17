"use client";
import { Header } from "@/components/header/header";
import { FaPlus } from "react-icons/fa";
import Paginator from "@/components/paginator/Paginator";
import { useState } from "react";
import BtnIcon from "@/components/btn/BtnIcon";
import { Table } from "@/components/table/Table";
import { HiOutlineEye } from "react-icons/hi2";
import { FaPencil } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

const productos = [
  {
    id: 1,
    nombre: "ALMACEN                                           ",
    rubroId: null,
  },
  {
    id: 2,
    nombre: "LACTEOS                                           ",
    rubroId: {
      id: 1,
      nombre: "ALMACEN                                           ",
    },
  },
  {
    id: 3,
    nombre: "PANIFICACION                                      ",
    rubroId: null,
  },
  {
    id: 4,
    nombre: "VERDULERIA                                        ",
    rubroId: null,
  },
  {
    id: 5,
    nombre: "CARNICERIA                                        ",
    rubroId: null,
  },
  {
    id: 6,
    nombre: "FIAMBRERIA                                        ",
    rubroId: null,
  },
  {
    id: 8,
    nombre: null,
    rubroId: null,
  },
];

export default function CategoriasComponent({
  setForm,
  form,
  page,
  count,
  setPage,
  onSubmit,
  resp,
  setDisabledPaginator,
  disabledPaginator,
  size,
  setSize,
}: any) {
  return (
    <div className="w-full">
      <header className="mb-4">
        <Header title="Categorias"></Header>
      </header>
      <div className="flex justify-end mt-[-20px] mb-2">
        <BtnIcon
          text="Agregar Categoria"
          type="Save"
          action={() => console.log("Crear pdf")}
        >
          <FaPlus />
        </BtnIcon>
      </div>
      <section className="flex justify-around">
        <div>
          <section className="relative overflow-x-auto shadow-sm items-center mx-auto tableScroll">
            <Table
              thead={
                <tr className="thead">
                  <th>Nombre</th>
                  <th>Rubro</th>
                  <th className="text-center max-w-[10px]">Ver</th>
                  <th className="text-center max-w-[10px]">Edit</th>
                  <th className="text-center max-w-[10px]">Del</th>
                </tr>
              }
              tbody={productos.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.nombre}</td>
                    <td>{e.rubroId?.nombre}</td>

                    <td className="iconStyle">
                      <HiOutlineEye
                        className="w-6 h-6 iconHover"
                        onClick={() => {}}
                      />
                    </td>
                    <td className="iconStyle">
                      <FaPencil
                        className="w-6 h-6 iconHover"
                        onClick={() => {}}
                      />
                    </td>
                    <td className="iconStyle">
                      <AiOutlineDelete
                        className="w-6 h-6 iconHover"
                        style={{ color: "red" }}
                      />
                    </td>
                  </tr>
                );
              })}
            />
            <section className="my-2 ">
              <Paginator
                itemsPerPage={5}
                totalItems={count}
                setPage={setPage}
                setForm={setForm}
                form={form}
                page={page}
                setDisabledPaginator={setDisabledPaginator}
                disabledPaginator={disabledPaginator}
              />
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}
