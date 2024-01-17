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
    nombreProveedor: "VITAL S&P                                         ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 2,
    nombreProveedor: "MILKAUT                                           ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 3,
    nombreProveedor: "MAXI-CONSUMO                                      ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 4,
    nombreProveedor: "SANTA FE MERCADO                                  ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 5,
    nombreProveedor: "EL BUEN SOL                                       ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 6,
    nombreProveedor: "LOCURAS                                           ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 7,
    nombreProveedor: "VENEZIANA                                         ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 8,
    nombreProveedor: "DEFINO HORACIO -PATY                              ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 9,
    nombreProveedor: "DISTRIBUIDORA DIEZ                                ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 10,
    nombreProveedor: "DISTRIBUIDORA MARIO BUSSONE                       ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 11,
    nombreProveedor: "ILOLAY-COLLERA                                    ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 12,
    nombreProveedor: "MARCHETTI                                         ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 13,
    nombreProveedor: "COCA-COLA                                         ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 14,
    nombreProveedor: "QUILMES SEBIS                                     ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 15,
    nombreProveedor: "DISTRIBUIDORA BARBAGLIA                           ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 16,
    nombreProveedor: "SOUPLET                                           ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 18,
    nombreProveedor: "AGRO TAMBO                                        ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 19,
    nombreProveedor: "M&M DISTRIBUCIONES (LEVITE)                       ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 20,
    nombreProveedor: "LA SERENISIMA                                     ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4778,
      nombre: "SAN CRISTOBAL                                     ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
  {
    id: 21,
    nombreProveedor: "FERNANDO                                          ",
    calle: "                                                  ",
    numeroCalle: "      ",
    email:
      "                                                                                                    ",
    telefono: "                                        ",
    localidadId: {
      id: 4604,
      nombre: "INDEPENDENCIA                                     ",
      departamentoId: {
        id: 522,
        nombre: "9 DE JULIO                                        ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
  },
];

export default function ProveedorsComponent({
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
  const [formProduct, setFormProduct] = useState<any>();
  return (
    <div className="w-full">
      <header className="mb-4">
        <Header title="Proveedores"></Header>
      </header>
      <div className="flex justify-end mt-[-20px] mb-2">
        <BtnIcon
          text="Agregar Proveedor"
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
                  <th>Nombre Proveedor</th>
                  <th>Calle</th>
                  <th>N° Calle</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Localidad</th>
                  <th className="text-center max-w-[30px]">Ver</th>
                  <th className="text-center max-w-[30px]">Edit</th>
                  <th className="text-center max-w-[30px]">Del</th>
                </tr>
              }
              tbody={productos.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.nombreProveedor}</td>
                    <td>{e.calle}</td>
                    <td>{e.numeroCalle}</td>
                    <td>{e.email}</td>
                    <td>{e.telefono}</td>
                    <td>{e.localidadId.nombre}</td>
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
