"use client";
import { Table } from "@/components/table/Table";
import formatMoneyUSD from "@/services/FormatMoneyUSD";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { LuNewspaper } from "react-icons/lu";
import { TbArrowsExchange } from "react-icons/tb";

import Paginator from "@/components/paginator/Paginator";
import { Header } from "@/components/header/header";
import Modal from "@/components/modals/Modal";
import Btn from "@/components/btn/Btn";
import BtnIcon from "@/components/btn/BtnIcon";
import { FaPlus } from "react-icons/fa";

const clientes = [
  {
    id: 1,
    nombre: "CONSUMIDOR FINAL                                  ",
    apellido: "                                                  ",
    numeroDocumento: "                                        ",
    calle: "                                                  ",
    numeroCalle: null,
    piso: null,
    email: null,
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
    localidadId: null,
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 2,
    nombre: "MAYORISTA                                         ",
    apellido: "                                                  ",
    numeroDocumento: "                                        ",
    calle: "                                                  ",
    numeroCalle: null,
    piso: null,
    email: null,
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
    localidadId: null,
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 4,
    nombre: "LAUTARO                                           ",
    apellido: "IMHOFF                                            ",
    numeroDocumento: "20373317757                             ",
    calle: "maipu                                             ",
    numeroCalle: 1547,
    piso: null,
    email:
      "pelucomegato                                                                                        ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: 2,
    tipoDocumentoNombre: "CUIT",
  },
  {
    id: 5,
    nombre: "MATIAS                                            ",
    apellido: "CORBETO                                           ",
    numeroDocumento: "1000                                    ",
    calle: "S/N                                               ",
    numeroCalle: 1,
    piso: null,
    email:
      "S/N                                                                                                 ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 6,
    nombre: "MAXIMILIANO                                       ",
    apellido: "ZAMORA                                            ",
    numeroDocumento: "1001                                    ",
    calle: "S/N                                               ",
    numeroCalle: 1,
    piso: null,
    email:
      "S/N                                                                                                 ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 7,
    nombre: "EVELYN                                            ",
    apellido: "CORREA                                            ",
    numeroDocumento: "1002                                    ",
    calle: "S/N                                               ",
    numeroCalle: 1,
    piso: null,
    email:
      "S/N                                                                                                 ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: false,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 8,
    nombre: "LUCAS                                             ",
    apellido: "CABRERA                                           ",
    numeroDocumento: "1003                                    ",
    calle: "s/n                                               ",
    numeroCalle: 1,
    piso: null,
    email:
      "s/n                                                                                                 ",
    telefono: "3408670946                              ",
    mayorista: null,
    empleado: null,
    activo: true,
    localidadId: {
      id: 4425,
      nombre: "AMBROSETTI                                        ",
      departamentoId: {
        id: 509,
        nombre: "SAN CRISTOBAL                                     ",
        provinciaId: {
          id: 20,
          nombre: "SANTA FE                                          ",
        },
      },
    },
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 9,
    nombre: "SEBASTIAN                                         ",
    apellido: "BULACIO                                           ",
    numeroDocumento: "1004                                    ",
    calle: "s/n                                               ",
    numeroCalle: 1,
    piso: null,
    email:
      "s/n                                                                                                 ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 10,
    nombre: "BALAUDO HNOS                                      ",
    apellido: "BALAUDO                                           ",
    numeroDocumento: "1006                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 11,
    nombre: "NICOLAS                                           ",
    apellido: "BERTOLI                                           ",
    numeroDocumento: "1007                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 12,
    nombre: "LUIS                                              ",
    apellido: "BUSTOS                                            ",
    numeroDocumento: "1008                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 13,
    nombre: "JORGE                                             ",
    apellido: "CABALLERO                                         ",
    numeroDocumento: "1009                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 14,
    nombre: "EXEQUIEL                                          ",
    apellido: "BREST                                             ",
    numeroDocumento: "1010                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: false,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 15,
    nombre: "DANIEL                                            ",
    apellido: "DEMARCHI                                          ",
    numeroDocumento: "1011                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 16,
    nombre: "ELVIRA                                            ",
    apellido: "REYNOSO                                           ",
    numeroDocumento: "1013                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 17,
    nombre: "GARRINCHA                                         ",
    apellido: "MONZON                                            ",
    numeroDocumento: "1014                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 18,
    nombre: "DANIEL                                            ",
    apellido: "GAMARRA                                           ",
    numeroDocumento: "1015                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 19,
    nombre: "ROBERTO                                           ",
    apellido: "GAMARRA                                           ",
    numeroDocumento: "1016                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 20,
    nombre: "ALBERTO                                           ",
    apellido: "GALOPPO                                           ",
    numeroDocumento: "1017                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
  {
    id: 21,
    nombre: "beto                                              ",
    apellido: "barbini                                           ",
    numeroDocumento: "1018                                    ",
    calle: "1                                                 ",
    numeroCalle: 1,
    piso: null,
    email:
      "1                                                                                                   ",
    telefono: null,
    mayorista: null,
    empleado: null,
    activo: true,
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
    tipoDocumentoId: null,
    tipoDocumentoNombre: null,
  },
];

const movimientos = [
  {
    id: 305697,
    ingreso: 3783.15,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302290,
    tipoPagoId: 2,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "TARJETA DEBITO                          ",
  },
  {
    id: 305696,
    ingreso: 12500.0,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302289,
    tipoPagoId: 1,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "EFECTIVO                                ",
  },
  {
    id: 305695,
    ingreso: 2810.0,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302288,
    tipoPagoId: 1,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "EFECTIVO                                ",
  },
  {
    id: 305694,
    ingreso: 47000.0,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302287,
    tipoPagoId: 1,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "EFECTIVO                                ",
  },
  {
    id: 305693,
    ingreso: 11161.72,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302286,
    tipoPagoId: 2,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "TARJETA DEBITO                          ",
  },
  {
    id: 305692,
    ingreso: 869.04,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302285,
    tipoPagoId: 1,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "EFECTIVO                                ",
  },
  {
    id: 305691,
    ingreso: 6901.7,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302284,
    tipoPagoId: 1,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "EFECTIVO                                ",
  },
  {
    id: 305690,
    ingreso: 2993.0,
    egreso: 0.0,
    descripcion: "FACTURA                                           ",
    cajaId: 4310,
    tipoMovimientoId: 4,
    facturaId: 302283,
    tipoPagoId: 1,
    tipoMovimientoNombre: "INGRESO                                           ",
    tipoPagoNombre: "EFECTIVO                                ",
  },
];

const factura = {
  id: 302290,
  fechaCreacion: "2023-12-23T12:32:32.086-03:00",
  total: 3783.15,
  subtotal: 3783.1499999999996,
  descuento: 0.0,
  interes: 0.0,
  clienteId: 1,
  promocionId: null,
  comprobanteId: null,
  puntoDeVentaId: 1,
  facturaRenglons: [
    {
      id: 1229394,
      cantidad: 1,
      precioCosto: 336.0,
      precioVenta: 537.6,
      peso: 0.24,
      detalle:
        "MANTECA                                            CAFFITO                                                                                            ",
      facturaId: 302290,
      productoId: 1678,
    },
    {
      id: 1229395,
      cantidad: 1,
      precioCosto: 336.0,
      precioVenta: 547.2,
      peso: 0.24,
      detalle:
        "PALETA                                             CAFFITO                                                                                            ",
      facturaId: 302290,
      productoId: 467,
    },
    {
      id: 1229392,
      cantidad: 1,
      precioCosto: 370.5,
      precioVenta: 552.75,
      peso: 0.39,
      detalle:
        "PAN                                                BERNASCONI                                                                                         ",
      facturaId: 302290,
      productoId: 404,
    },
    {
      id: 1229393,
      cantidad: 1,
      precioCosto: 551.0,
      precioVenta: 888.0,
      peso: 0.29,
      detalle:
        "JAMON COCIDO                                       CAFFITO                                                                                            ",
      facturaId: 302290,
      productoId: 2118,
    },
    {
      id: 1229390,
      cantidad: 3,
      precioCosto: 80.0,
      precioVenta: 128.0,
      peso: 0.0,
      detalle:
        "HUEVOS POR UNIDAD Caffito                                                                                                                             ",
      facturaId: 302290,
      productoId: 4561,
    },
    {
      id: 1229391,
      cantidad: 1,
      precioCosto: 540.0,
      precioVenta: 873.6,
      peso: 0.27,
      detalle:
        "QUESO BARRA                                        CAFFITO                                                                                            ",
      facturaId: 302290,
      productoId: 799,
    },
  ],
  pagos: [
    {
      id: 140350,
      monto: 3783.15,
      tipoPagoId: 2,
      tipoPagoNombre: "TARJETA DEBITO                          ",
      facturaId: 302290,
      cajaId: null,
      cuentaCorrienteId: null,
    },
  ],
  puntoDeVentaNombre: "CASA CENTRAL",
  promocionNombre: null,
  clienteNombreApellido:
    "CONSUMIDOR FINAL                                                                                     ",
  ticket: null,
};

export default function ClientesComponent({
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
  open,
  setOpen,
}: any) {
  const [cajaSelected, setCajaSelected] = useState<any>({});
  const [typeModal, setTypeModal] = useState<string>("");
  const [facturaSelected, setFacturaSelected] = useState<any>({});
  console.log(facturaSelected);
  return (
    <div className="w-full">
      <Header title="Clientes">
        <BtnIcon text="Agregar Cliente" action={() => {}}>
          <FaPlus />
        </BtnIcon>
      </Header>
      <section className="relative overflow-x-auto shadow-md items-center mx-auto tableScroll">
        <Table
          thead={
            <tr className="thead">
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Tipo Documento</th>
              <th>N° Documento</th>
              <th className="text-center">Mayorista</th>
              <th className="text-center">Empleado</th>
              <th className="text-center">Activo</th>
              <th className="text-center max-w-[25px]">C.C.</th>
              <th className="text-center max-w-[25px]">Info</th>
              <th className="text-center max-w-[25px]">Edit</th>
              <th className="text-center max-w-[25px]">Elim</th>
            </tr>
          }
          tbody={clientes.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.nombre}</td>
                <td>{e.apellido}</td>
                <td>{e.tipoDocumentoNombre}</td>
                <td>{e.numeroDocumento}</td>
                <td>{e.mayorista}</td>
                <td>{e.empleado}</td>
                <td>{e.activo}</td>
                <td className="iconStyle">
                  <LuNewspaper
                    className="w-6 h-6 iconHover"
                    style={{ color: "#3B71CA" }}
                    onClick={() => {
                      setCajaSelected(e);
                      setTypeModal("view");
                      setOpen(true);
                    }}
                  />
                </td>
                <td className="iconStyle">
                  <HiOutlineEye
                    className="w-6 h-6 iconHover"
                    style={{ color: "#3B71CA" }}
                    onClick={() => {
                      setCajaSelected(e);
                      setTypeModal("view");
                      setOpen(true);
                    }}
                  />
                </td>
                <td className="iconStyle">
                  <TbArrowsExchange
                    className="w-6 h-6 iconHover"
                    onClick={() => {
                      setCajaSelected(e);
                      setTypeModal("movements");
                      setOpen(true);
                    }}
                  />
                </td>
                <td className="iconStyle">
                  <AiOutlineDelete
                    className="w-6 h-6 iconHover "
                    style={{ color: "red" }}
                  />
                </td>
              </tr>
            );
          })}
        />
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
