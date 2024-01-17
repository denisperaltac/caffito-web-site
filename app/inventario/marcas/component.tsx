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
import { TableSmall } from "@/components/table/TableSmall";

const productos = [
  {
    id: 1,
    nombre: "Caffito                                           ",
  },
  {
    id: 2,
    nombre: "S&P                                               ",
  },
  {
    id: 4,
    nombre: "MILKAUT                                           ",
  },
  {
    id: 5,
    nombre: "FERNANDO                                          ",
  },
  {
    id: 6,
    nombre: "MAXICONSUMO                                       ",
  },
  {
    id: 7,
    nombre: "VITAL S&P                                         ",
  },
  {
    id: 8,
    nombre: "MARCHETTI                                         ",
  },
  {
    id: 9,
    nombre: "DEFINO HORACIO PATY                               ",
  },
  {
    id: 10,
    nombre: "VENECIANA                                         ",
  },
  {
    id: 11,
    nombre: "SANTA FE MERCADO                                  ",
  },
  {
    id: 12,
    nombre: "GAMARRA                                           ",
  },
  {
    id: 13,
    nombre: "ILOLAY                                            ",
  },
  {
    id: 14,
    nombre: "ILOLAY-COLLERA                                    ",
  },
  {
    id: 15,
    nombre: "DISTRIBUIDORA MARIO BUSSONE                       ",
  },
  {
    id: 16,
    nombre: "LA SERENISIMA                                     ",
  },
  {
    id: 17,
    nombre: "EL BUEN SOL                                       ",
  },
  {
    id: 18,
    nombre: "DISTRIBUIDORA BARBAGLIA                           ",
  },
  {
    id: 19,
    nombre: "SABOR SPECIAL                                     ",
  },
  {
    id: 20,
    nombre: "M&M DISTRIBUCIONES (LEVITE)                       ",
  },
  {
    id: 21,
    nombre: "MANAOS                                            ",
  },
];

export default function MarcasComponent({
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
        <Header title="Marcas"></Header>
      </header>
      <div className="flex justify-end mt-[-20px] mb-2">
        <BtnIcon
          text="Agregar Marca"
          type="Save"
          action={() => console.log("Crear pdf")}
        >
          <FaPlus />
        </BtnIcon>
      </div>
      <section className="flex justify-around">
        <div>
          <section className="relative overflow-x-auto shadow-sm items-center mx-auto tableScroll">
            <TableSmall
              thead={
                <tr className="thead">
                  <th>Nombre</th>
                  <th className="text-center max-w-[30px]">Ver</th>
                  <th className="text-center max-w-[30px]">Edit</th>
                  <th className="text-center max-w-[30px]">Del</th>
                </tr>
              }
              tbody={productos.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.nombre}</td>

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
