"use client";

import BtnIcon from "@/components/btn/BtnIcon";
import { Header } from "@/components/header/header";
import Paginator from "@/components/paginator/Paginator";
import { Input } from "@/components/input/Input";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Table } from "@/components/table/Table";
import formatMoneyUSD from "@/services/FormatMoneyUSD";
import { HiOutlineEye } from "react-icons/hi2";
import { TbArrowsExchange } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const productos = [
  {
    id: 10,
    codigoReferencia:
      "7798023697842                                                                                       ",
    nombre: "OBLEAS CON CHOCOLATE X 100 GRS                    ",
    cantidad: 0,
    stockMax: 36,
    stockMin: 3,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 30,
      nombre: "MAROLIO                                           ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 12711,
        precioCosto: 9.12,
        precioVenta: 10.5,
        precioMayorista: 11.0,
        cantidad: 0,
        activo: true,
        pesounidad: 0.0,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 10,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 11,
    codigoReferencia:
      "7790645001076                                                                                       ",
    nombre: "ANANA EN RODAJAS X 836 GRS                        ",
    cantidad: 5,
    stockMax: 12,
    stockMin: 3,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: true,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 30,
      nombre: "MAROLIO                                           ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 11307,
        precioCosto: 52.27,
        precioVenta: 67.0,
        precioMayorista: 60.11,
        cantidad: 5,
        activo: true,
        pesounidad: 0.8,
        pesototal: 4.0,
        stockMin: null,
        stockMax: null,
        productoId: 11,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 4.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 12,
    codigoReferencia:
      "7797453000796                                                                                       ",
    nombre: "ALIMENTO PEDIGREE X 100GRS ADULTO                 ",
    cantidad: 22,
    stockMax: 24,
    stockMin: 12,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: true,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 2,
      nombre: "S&P                                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 13,
        precioCosto: 9.2,
        precioVenta: 12.0,
        precioMayorista: 10.58,
        cantidad: 22,
        activo: true,
        pesounidad: null,
        pesototal: null,
        stockMin: null,
        stockMax: null,
        productoId: 12,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 13,
    codigoReferencia:
      "7797453000468                                                                                       ",
    nombre: "ALIMENTO PEDIGREE CACHORRO X 85 GRS               ",
    cantidad: 0,
    stockMax: 24,
    stockMin: 12,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 2,
      nombre: "S&P                                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 2846,
        precioCosto: 10.5,
        precioVenta: 14.5,
        precioMayorista: 12.4,
        cantidad: 0,
        activo: true,
        pesounidad: null,
        pesototal: null,
        stockMin: null,
        stockMax: null,
        productoId: 13,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 14,
    codigoReferencia:
      "7791416001240                                                                                       ",
    nombre: "ALIMENTO PARA PERROS ADULTOS  1.5 KG              ",
    cantidad: 40,
    stockMax: 3,
    stockMin: 3,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 90,
      nombre: "PEDIGREE                                          ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 12571,
        precioCosto: 15.0,
        precioVenta: 21.0,
        precioMayorista: 18.0,
        cantidad: 40,
        activo: true,
        pesounidad: 1.5,
        pesototal: 60.0,
        stockMin: null,
        stockMax: null,
        productoId: 14,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 60.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 15,
    codigoReferencia:
      "7790580236519                                                                                       ",
    nombre: "BIZCOCHUELO GODET MARMOLADO X 500GRS              ",
    cantidad: 0,
    stockMax: 10,
    stockMin: 4,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 2,
      nombre: "S&P                                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 7343,
        precioCosto: 38.0,
        precioVenta: 53.0,
        precioMayorista: 46.0,
        cantidad: 0,
        activo: true,
        pesounidad: 0.05,
        pesototal: 0.2,
        stockMin: null,
        stockMax: null,
        productoId: 15,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.2,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 16,
    codigoReferencia:
      "7790580626419                                                                                       ",
    nombre: "BIZCOCHUELO VAINILLA X 480 GRS                    ",
    cantidad: 0,
    stockMax: 20,
    stockMin: 10,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 98,
      nombre: "GODET                                             ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 5121,
        precioCosto: 33.0,
        precioVenta: 45.0,
        precioMayorista: 40.0,
        cantidad: 0,
        activo: true,
        pesounidad: null,
        pesototal: null,
        stockMin: null,
        stockMax: null,
        productoId: 16,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 17,
    codigoReferencia:
      "7790070412362                                                                                       ",
    nombre: "BIZCOCHUELO NARANJA X 540 GRS                     ",
    cantidad: -14,
    stockMax: 1,
    stockMin: 1,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 357,
      nombre: "EXQUISITA                                         ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 11301,
        precioCosto: 610.0,
        precioVenta: 915.0,
        precioMayorista: 915.0,
        cantidad: -14,
        activo: true,
        pesounidad: 1.0,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 17,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: "2023-08-31T18:28:43.047-03:00",
  },
  {
    id: 18,
    codigoReferencia:
      "7790150830857                                                                                       ",
    nombre: "CHOCOLINO LA VIRGINIA X 180 GRS                   ",
    cantidad: 0,
    stockMax: 20,
    stockMin: 10,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 2,
      nombre: "S&P                                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 3713,
        precioCosto: 16.1,
        precioVenta: 22.0,
        precioMayorista: 19.0,
        cantidad: 0,
        activo: true,
        pesounidad: null,
        pesototal: null,
        stockMin: null,
        stockMax: null,
        productoId: 18,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 19,
    codigoReferencia:
      "7506339343717                                                                                       ",
    nombre: "DETERGENTE  500 ML                                ",
    cantidad: 77,
    stockMax: 20,
    stockMin: 20,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 279,
      nombre: "MAGISTRAL                                         ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 12562,
        precioCosto: 110.0,
        precioVenta: 160.0,
        precioMayorista: 160.0,
        cantidad: 7,
        activo: true,
        pesounidad: 0.5,
        pesototal: 38.5,
        stockMin: null,
        stockMax: null,
        productoId: 19,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
      {
        id: 12563,
        precioCosto: 31.0,
        precioVenta: 50.0,
        precioMayorista: 50.0,
        cantidad: 70,
        activo: false,
        pesounidad: 0.0,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 19,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 38.5,
    pesable: null,
    cambioPrecio: null,
  },
];
export default function ProductosComponent({
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
  const [openFilter, setOpenFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(false);
  const [formProduct, setFormProduct] = useState<any>({});

  return (
    <div className="w-full">
      <header className="mb-4">
        <Header title="Productos">
          <BtnIcon text="Filtros" action={() => setOpenFilter(!openFilter)}>
            {!openFilter ? <LuFilter /> : <RxCross2 />}
          </BtnIcon>
          <BtnIcon
            text="Agregar Producto"
            action={() => setOpenFilter(!openFilter)}
          >
            <FaPlus />
          </BtnIcon>
        </Header>
      </header>
      {openFilter && (
        <div className="w-full border-2 border-gray-300  flex flex-row p-2 my-2">
          <Input
            setForm={setForm}
            form={form}
            title="Nombre"
            attribute="nombre.contains"
          />
          <Input
            setForm={setForm}
            form={form}
            title="Codigo (PLU)"
            attribute="codigoReferencia.contains"
          />
        </div>
      )}

      <section className="relative overflow-x-auto shadow-md items-center mx-auto tableScroll">
        <Table
          thead={
            <tr className="thead">
              <th>Codigo Referencia (PLU)</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Marca</th>
              <th>Stock</th>
              <th>Proveedor</th>
              <th>($) Venta</th>
              <th className="text-center max-w-[25px]">Info</th>
              <th className="text-center max-w-[25px]">Edit</th>
              <th className="text-center max-w-[25px]">Elim.</th>
            </tr>
          }
          tbody={productos.map((e) => {
            let color =
              formProduct === e
                ? "bg-primary-green-hover-hard pointer-events-none"
                : "";
            return (
              <tr
                key={e.codigoReferencia}
                onClick={() => {
                  setFormProduct(e);
                }}
              >
                <td className={color}>{e.codigoReferencia}</td>
                <td className={color}>{e.nombre}</td>
                <td className={color}>{e.categoriaId.nombre}</td>
                <td className={color}>{e.marcaId.nombre}</td>
                <td className={color}>{e.cantidad}</td>
                <td className={color}>
                  {e.productoProveedors[0].proveedor.nombreProveedor}
                </td>

                <td className={color}>
                  {formatMoneyUSD(e.productoProveedors[0].precioVenta)}
                </td>

                <td className="iconStyle">
                  <HiOutlineEye
                    className="w-6 h-6 iconHover"
                    onClick={() => {}}
                  />
                </td>
                <td className="iconStyle">
                  <FaPencil className="w-6 h-6 iconHover" onClick={() => {}} />
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
      </section>
      <section className="my-2">
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
    </div>
  );
}
