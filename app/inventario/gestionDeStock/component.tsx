"use client";
import BtnIcon from "@/components/btn/BtnIcon";
import { Input } from "@/components/input/Input";
import { Table } from "@/components/table/Table";
import formatMoneyUSD from "@/services/FormatMoneyUSD";
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaRegSave } from "react-icons/fa";
import Paginator from "@/components/paginator/Paginator";
import { Header } from "@/components/header/header";

const products = [
  {
    id: 7250,
    codigoReferencia:
      "7798136180422                                                                                       ",
    nombre: "000 harina                                        ",
    cantidad: -11,
    stockMax: null,
    stockMin: null,
    descripcion: null,
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
        id: 15252,
        precioCosto: 160.0,
        precioVenta: 240.0,
        precioMayorista: 240.0,
        cantidad: -11,
        activo: false,
        pesounidad: null,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 7250,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: "2023-04-29T16:44:24.501-03:00",
  },
  {
    id: 7417,
    codigoReferencia:
      "7791293045122                                                                                       ",
    nombre: "10X ANTIBACTERIAL 72HS                            ",
    cantidad: 4,
    stockMax: null,
    stockMin: null,
    descripcion: null,
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 164,
      nombre: "REXONA                                            ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 15419,
        precioCosto: 314.58,
        precioVenta: 471.87,
        precioMayorista: 471.87,
        cantidad: 4,
        activo: false,
        pesounidad: null,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 7417,
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
    cambioPrecio: "2023-06-22T17:28:22.96-03:00",
  },
  {
    id: 6615,
    codigoReferencia:
      "7790314006104                                                                                       ",
    nombre: "3/4 CHARDON                                       ",
    cantidad: -1,
    stockMax: null,
    stockMin: null,
    descripcion: null,
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 620,
      nombre: "TORO                                              ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 14614,
        precioCosto: 170.0,
        precioVenta: 255.0,
        precioMayorista: 246.5,
        cantidad: -1,
        activo: false,
        pesounidad: null,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 6615,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: "2022-08-04T11:43:56.348-03:00",
  },
  {
    id: 122,
    codigoReferencia:
      "7790310006764                                                                                       ",
    nombre: "3´D MEGA X 66GRS                                  ",
    cantidad: -17,
    stockMax: 10,
    stockMin: 6,
    descripcion:
      "                                                                                                                                                                                                        ",
    borrado: true,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 9,
      nombre: "DEFINO HORACIO PATY                               ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 6340,
        precioCosto: 45.0,
        precioVenta: 65.25,
        precioMayorista: 65.25,
        cantidad: -17,
        activo: true,
        pesounidad: 0.66,
        pesototal: 3.96,
        stockMin: null,
        stockMax: null,
        productoId: 122,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 3.96,
    pesable: null,
    cambioPrecio: "2023-11-27T17:02:40.693-03:00",
  },
  {
    id: 6964,
    codigoReferencia:
      "7790310985120                                                                                       ",
    nombre: "3D ORIGINAL                                       ",
    cantidad: -22,
    stockMax: null,
    stockMin: null,
    descripcion: null,
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 482,
      nombre: "3D                                                ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 14966,
        precioCosto: 1410.0,
        precioVenta: 2115.0,
        precioMayorista: 2115.0,
        cantidad: -22,
        activo: false,
        pesounidad: null,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 6964,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: "2023-12-14T18:49:08.002-03:00",
  },
  {
    id: 4065,
    codigoReferencia:
      "7790310982389                                                                                       ",
    nombre: "3 DS MEGA QUESO                                   ",
    cantidad: -24,
    stockMax: 4,
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
      id: 482,
      nombre: "3D                                                ",
    },
    impuestoId: null,
    productoProveedors: [
      {
        id: 10985,
        precioCosto: 78.0,
        precioVenta: 113.1,
        precioMayorista: 113.1,
        cantidad: -24,
        activo: true,
        pesounidad: 105.0,
        pesototal: 105.0,
        stockMin: null,
        stockMax: null,
        productoId: 4065,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 105.0,
    pesable: null,
    cambioPrecio: "2021-12-30T12:09:15.54-03:00",
  },
  {
    id: 5487,
    codigoReferencia:
      "7790310983485                                                                                       ",
    nombre: "3DS MEGA QUESO                                    ",
    cantidad: -21,
    stockMax: null,
    stockMin: null,
    descripcion: null,
    borrado: false,
    categoriaId: {
      id: 1,
      nombre: "ALMACEN                                           ",
      rubroId: null,
    },
    marcaId: {
      id: 1,
      nombre: "Caffito                                           ",
    },
    impuestoId: {
      id: 4,
      nombre: "IVA 10,1 %                                        ",
      porcentaje: 0.105,
    },
    productoProveedors: [
      {
        id: 13483,
        precioCosto: 129.47,
        precioVenta: 187.72,
        precioMayorista: 187.72,
        cantidad: -21,
        activo: false,
        pesounidad: null,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 5487,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: null,
  },
  {
    id: 5513,
    codigoReferencia:
      "7790310983478                                                                                       ",
    nombre: "3 DS MEGAS                                        ",
    cantidad: -9,
    stockMax: null,
    stockMin: null,
    descripcion: null,
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
        id: 13509,
        precioCosto: 75.16,
        precioVenta: 108.99,
        precioMayorista: 108.99,
        cantidad: -9,
        activo: false,
        pesounidad: null,
        pesototal: 0.0,
        stockMin: null,
        stockMax: null,
        productoId: 5513,
        proveedor: {
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
        puntoDeVentaId: 1,
        puntoDeVentaNombre: "CASA CENTRAL",
      },
    ],
    peso: 0.0,
    pesable: null,
    cambioPrecio: "2021-05-20T10:18:35.617-03:00",
  },
];

export default function GestionDeStockComponent({
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
  const [formProduct, setFormProduct] = useState<any>({});
  const [porcentaje, setPorcentaje] = useState<any>();
  const [porcentajeMay, setPorcentajeMay] = useState<any>();

  return (
    <div className="w-full">
      <header className="mb-4">
        <Header title="Gestion de stock">
          <BtnIcon text="Filtros" action={() => setOpenFilter(!openFilter)}>
            {!openFilter ? <LuFilter /> : <RxCross2 />}
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
              <th>($) Costo</th>
              <th>($) Venta</th>
              <th>($) Mayorista</th>
            </tr>
          }
          tbody={products.map((e) => {
            let color =
              formProduct === e
                ? "bg-primary-green-hover-hard pointer-events-none"
                : "";
            return (
              <tr
                key={e.codigoReferencia}
                onClick={() => {
                  setFormProduct(e);
                  setPorcentaje(
                    (
                      (e.productoProveedors[0]?.precioCosto /
                        e.productoProveedors[0]?.precioVenta) *
                      100
                    ).toFixed(2)
                  );
                  setPorcentajeMay(
                    (
                      (e.productoProveedors[0]?.precioCosto /
                        e.productoProveedors[0]?.precioMayorista) *
                      100
                    ).toFixed(2)
                  );
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
                  {formatMoneyUSD(e.productoProveedors[0].precioCosto)}
                </td>
                <td className={color}>
                  {formatMoneyUSD(e.productoProveedors[0].precioVenta)}
                </td>
                <td className={color}>
                  {formatMoneyUSD(e.productoProveedors[0].precioMayorista)}
                </td>
              </tr>
            );
          })}
        />
      </section>
      <section className="w-full border-2 border-gray-300 flex flex-row p-2 my-2 align-middle items-center">
        <div className="mb-4 mt-2 mr-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Precio Costo $
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            autoComplete="off"
            value={
              formProduct.productoProveedors &&
              formProduct.productoProveedors[0]?.precioCosto
            }
            type="text"
            placeholder={"..."}
            onChange={(e) =>
              setFormProduct({
                ...formProduct,
                productoProveedors: {
                  ...formProduct?.productoProveedors[0],
                  precioCosto: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="mb-4 mt-2 mr-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Porcentaje %
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            autoComplete="off"
            value={porcentaje}
            type="number"
            placeholder={"..."}
            onChange={(e) => {
              setPorcentaje(e.target.value);
              setFormProduct({
                ...formProduct,
                productoProveedors: [
                  {
                    ...formProduct?.productoProveedors[0],
                    precioVenta: (
                      (Number(e.target.value) / 100 + 1) *
                      formProduct?.productoProveedors[0].precioCosto
                    ).toFixed(2),
                  },
                ],
              });
            }}
          />
        </div>
        <div className="mb-4 mt-2 mr-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Precio Venta $
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            autoComplete="off"
            value={
              formProduct.productoProveedors &&
              formProduct.productoProveedors[0]?.precioVenta
            }
            type="text"
            placeholder={"..."}
            onChange={(e) =>
              setFormProduct({
                ...formProduct,
                productoProveedors: {
                  ...formProduct.productoProveedors[0],
                  precioVenta: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="mb-4 mt-2 mr-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Porcentaje May. %
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            autoComplete="off"
            value={porcentajeMay}
            type="number"
            placeholder={"..."}
            onChange={(e) => {
              setPorcentajeMay(e.target.value);
              setFormProduct({
                ...formProduct,
                productoProveedors: [
                  {
                    ...formProduct?.productoProveedors[0],
                    precioMayorista: (
                      (Number(e.target.value) / 100 + 1) *
                      formProduct?.productoProveedors[0].precioCosto
                    ).toFixed(2),
                  },
                ],
              });
            }}
          />
        </div>
        <div className="mb-4 mt-2 mr-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Precio Mayorista $
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            autoComplete="off"
            value={
              formProduct.productoProveedors &&
              formProduct?.productoProveedors[0]?.precioMayorista
            }
            type="text"
            placeholder={"..."}
            onChange={(e) =>
              setFormProduct({
                ...formProduct,
                productoProveedors: {
                  ...formProduct.productoProveedors[0],
                  precioMayorista: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="mb-4 mt-2 mr-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-7" />
          <BtnIcon
            action={() => console.log("Ejecutamos el cambio")}
            text="Save"
          >
            <FaRegSave />
          </BtnIcon>
        </div>
      </section>
      <section>
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
