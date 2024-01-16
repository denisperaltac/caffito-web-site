"use client";
import { Header } from "@/components/header/header";
import { PiFilePdfDuotone } from "react-icons/pi";

import Paginator from "@/components/paginator/Paginator";
import { useState } from "react";
import { TableSmall } from "@/components/table/TableSmall";
import Btn from "@/components/btn/Btn";
import BtnIcon from "@/components/btn/BtnIcon";

const productos = [
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
  {
    id: 8,
    codigoReferencia:
      "7798023695565                                                                                       ",
    nombre: "DURAZNO EN TROZOS X 820 GRS                       ",
    cantidad: 12,
    stockMax: 12,
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
      id: 30,
      nombre: "MAROLIO                                           ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 11306,
        precioCosto: 22.2,
        precioVenta: 29.9,
        precioMayorista: 25.5,
        cantidad: 12,
        activo: true,
        pesounidad: 0.8,
        pesototal: 9.600000000000001,
        stockMin: null,
        stockMax: null,
        productoId: 8,
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
    peso: 9.600000000000001,
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
    id: 9,
    codigoReferencia:
      "7798164910503                                                                                       ",
    nombre: "PALMITOS EN RODAJAS 820 GRS                       ",
    cantidad: 7,
    stockMax: 12,
    stockMin: 5,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 155,
      nombre: "LA ABADIA                                         ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 12564,
        precioCosto: 53.3,
        precioVenta: 80.0,
        precioMayorista: 80.0,
        cantidad: 7,
        activo: true,
        pesounidad: 0.5,
        pesototal: 3.5,
        stockMin: null,
        stockMax: null,
        productoId: 9,
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
    peso: 3.5,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 3919,
    codigoReferencia:
      "7790365000014                                                                                       ",
    nombre: "JUGO ANANA  5 LTS                                 ",
    cantidad: 0,
    stockMax: 5,
    stockMin: 5,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 456,
      nombre: "VIVARO                                            ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 12567,
        precioCosto: 73.78,
        precioVenta: 103.0,
        precioMayorista: 92.25,
        cantidad: 0,
        activo: true,
        pesounidad: 5.0,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 3919,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 386,
    codigoReferencia:
      "7791813421528                                                                                       ",
    nombre: "GASEOSA 7 UP 1.5 LTS                              ",
    cantidad: -36,
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
      id: 558,
      nombre: "7UP                                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 12541,
        precioCosto: 44.7,
        precioVenta: 65.0,
        precioMayorista: 56.0,
        cantidad: -36,
        activo: true,
        pesounidad: 1.5,
        pesototal: -54.0,
        stockMin: null,
        stockMax: null,
        productoId: 386,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: -54.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 2412,
    codigoReferencia:
      "7791813423911                                                                                       ",
    nombre: "LIMONETO X 2.25 LTS                               ",
    cantidad: 7,
    stockMax: 8,
    stockMin: 8,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 521,
      nombre: "H2O                                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 10330,
        precioCosto: 47.12,
        precioVenta: 66.0,
        precioMayorista: 56.0,
        cantidad: 7,
        activo: true,
        pesounidad: 0.0,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 2412,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 3414,
    codigoReferencia:
      "7791058002452                                                                                       ",
    nombre: "QUESO GRUYERE MANFREY                             ",
    cantidad: -2,
    stockMax: 2,
    stockMin: 2,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: true,
    categoriaId: {
      id: 2,
      nombre: "LACTEOS                                           ",
      rubroId: {
        id: 1,
        nombre: "ALMACEN                                           ",
      },
    },
    marcaId: {
      id: 328,
      nombre: "MANFREY                                           ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 10200,
        precioCosto: 37.65,
        precioVenta: 53.0,
        precioMayorista: 47.0,
        cantidad: -2,
        activo: true,
        pesounidad: 0.18,
        pesototal: 0.36,
        stockMin: null,
        stockMax: null,
        productoId: 3414,
        proveedor: {
          id: 30,
          nombreProveedor: "BLESIO FERNANDO                                   ",
          calle: "                                                  ",
          numeroCalle: "      ",
          email:
            "                                                                                                    ",
          telefono: "                                        ",
          localidadId: {
            id: 4464,
            nombre: "CAMPO GARAY                                       ",
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.36,
    pesable: null,
    cambioPrecio: null,
  },
];

export default function EtiquetasComponent({
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
  const [productosAdded, setProductosAdded] = useState<any>([]);
  return (
    <div className="w-full">
      <header className="mb-4">
        <Header title="Etiquetas"></Header>
      </header>

      <section className="flex justify-around">
        <div>
          <h5 className="text-center">Productos</h5>
          <section className="relative overflow-x-auto shadow-sm items-center mx-auto tableScroll">
            <TableSmall
              thead={
                <tr className="thead">
                  <th>Codigo Referencia (PLU)</th>
                  <th>Nombre</th>
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
        <div className="flex items-center">
          <Btn
            text="Add Product"
            type="white"
            action={() => {
              setProductosAdded([...productosAdded, formProduct]);
              setFormProduct(null);
            }}
            disabled={formProduct ? false : true}
          />
        </div>
        <div>
          <h5 className="text-center">Etiquetas</h5>
          <section className="relative overflow-x-auto shadow-sm items-center mx-auto tableScroll">
            <TableSmall
              thead={
                <tr className="thead">
                  <th>Codigo Referencia (PLU)</th>
                  <th>Nombre</th>
                </tr>
              }
              tbody={productosAdded.map((e: any) => {
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
                  </tr>
                );
              })}
            />
          </section>
        </div>
      </section>
      <div className="flex justify-center">
        <BtnIcon
          action={() => console.log("Crear pdf")}
          disabled={productosAdded.length < 1 && true}
        >
          <PiFilePdfDuotone />
          Exportar
        </BtnIcon>
      </div>
    </div>
  );
}
