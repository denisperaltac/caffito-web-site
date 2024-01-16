"use client";
import { Table } from "@/components/table/Table";
import formatMoneyUSD from "@/services/FormatMoneyUSD";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

import { TbArrowsExchange } from "react-icons/tb";

import Paginator from "@/components/paginator/Paginator";
import { Header } from "@/components/header/header";
import Modal from "@/components/modals/Modal";
import Btn from "@/components/btn/Btn";

const cajas = [
  {
    id: 4308,
    inicio: 0.0,
    cierre: 1335543.06,
    enproceso: false,
    fecha: "2023-12-22T08:25:53.347-03:00",
    fechaCierre: "2023-12-22T12:42:54.927-03:00",
    ingreso: 1349876.9900000005,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15090,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T15:42:54.927Z",
        diferencia: 0.0,
        cajaId: 4308,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15091,
        ingresoEfectivo: 318740.79,
        pendiente: 346601.38,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T15:42:54.927Z",
        diferencia: 27860.590000000026,
        cajaId: 4308,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15092,
        ingresoEfectivo: 33241.56,
        pendiente: 33241.56,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T15:42:54.927Z",
        diferencia: 0.0,
        cajaId: 4308,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15093,
        ingresoEfectivo: 504762.75,
        pendiente: 504722.47,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T15:42:54.927Z",
        diferencia: -40.28000000002794,
        cajaId: 4308,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15094,
        ingresoEfectivo: 478797.96,
        pendiente: 465311.58,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T15:42:54.927Z",
        diferencia: -13486.380000000005,
        cajaId: 4308,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4307,
    inicio: 0.0,
    cierre: 879548.39,
    enproceso: false,
    fecha: "2023-12-21T17:01:05.312-03:00",
    fechaCierre: "2023-12-21T21:15:08.312-03:00",
    ingreso: 885526.3699999999,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15088,
        ingresoEfectivo: 121679.65,
        pendiente: 121679.65,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T00:15:08.312Z",
        diferencia: 0.0,
        cajaId: 4307,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15089,
        ingresoEfectivo: 342931.0,
        pendiente: 343042.91,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T00:15:08.312Z",
        diferencia: 111.90999999997439,
        cajaId: 4307,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
      {
        id: 15085,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T00:15:08.312Z",
        diferencia: 0.0,
        cajaId: 4307,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15086,
        ingresoEfectivo: 405189.59,
        pendiente: 411055.66000000003,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T00:15:08.312Z",
        diferencia: 5866.070000000007,
        cajaId: 4307,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15087,
        ingresoEfectivo: 9748.15,
        pendiente: 9748.15,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-22T00:15:08.312Z",
        diferencia: 0.0,
        cajaId: 4307,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
    ],
  },
  {
    id: 4306,
    inicio: 0.0,
    cierre: 413417.91,
    enproceso: false,
    fecha: "2023-12-21T08:36:23.486-03:00",
    fechaCierre: "2023-12-21T12:36:32.969-03:00",
    ingreso: 412160.73,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15080,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T15:36:32.969Z",
        diferencia: 0.0,
        cajaId: 4306,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15081,
        ingresoEfectivo: 215766.61,
        pendiente: 198364.5,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T15:36:32.969Z",
        diferencia: -17402.109999999986,
        cajaId: 4306,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15082,
        ingresoEfectivo: 15375.0,
        pendiente: 15375.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T15:36:32.969Z",
        diferencia: 0.0,
        cajaId: 4306,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15083,
        ingresoEfectivo: 90426.3,
        pendiente: 90426.29999999999,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T15:36:32.969Z",
        diferencia: -1.4551915228366852e-11,
        cajaId: 4306,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15084,
        ingresoEfectivo: 91850.0,
        pendiente: 107994.93,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T15:36:32.969Z",
        diferencia: 16144.929999999993,
        cajaId: 4306,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4305,
    inicio: 0.0,
    cierre: 464568.5,
    enproceso: false,
    fecha: "2023-12-20T16:58:49.481-03:00",
    fechaCierre: "2023-12-20T21:16:45.047-03:00",
    ingreso: 466065.39,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15075,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T00:16:45.047Z",
        diferencia: 0.0,
        cajaId: 4305,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15076,
        ingresoEfectivo: 171942.43,
        pendiente: 160485.58000000002,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T00:16:45.047Z",
        diferencia: -11456.849999999977,
        cajaId: 4305,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15077,
        ingresoEfectivo: 7022.29,
        pendiente: 7022.29,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T00:16:45.047Z",
        diferencia: 0.0,
        cajaId: 4305,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15078,
        ingresoEfectivo: 71803.78,
        pendiente: 71803.1,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T00:16:45.047Z",
        diferencia: -0.6799999999930151,
        cajaId: 4305,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15079,
        ingresoEfectivo: 213800.0,
        pendiente: 226754.41999999998,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-21T00:16:45.047Z",
        diferencia: 12954.419999999984,
        cajaId: 4305,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4304,
    inicio: 0.0,
    cierre: 904160.81,
    enproceso: false,
    fecha: "2023-12-20T08:28:53.298-03:00",
    fechaCierre: "2023-12-20T12:37:15.229-03:00",
    ingreso: 891763.76,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15072,
        ingresoEfectivo: 395720.7,
        pendiente: 395990.73,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T15:37:15.229Z",
        diferencia: 270.02999999996973,
        cajaId: 4304,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15073,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T15:37:15.229Z",
        diferencia: 0.0,
        cajaId: 4304,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15074,
        ingresoEfectivo: 308300.0,
        pendiente: 295449.67,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T15:37:15.229Z",
        diferencia: -12850.330000000016,
        cajaId: 4304,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
      {
        id: 15070,
        ingresoEfectivo: 3420.0,
        pendiente: 3603.25,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T15:37:15.229Z",
        diferencia: 183.25,
        cajaId: 4304,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15071,
        ingresoEfectivo: 196720.11,
        pendiente: 196720.11000000002,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T15:37:15.229Z",
        diferencia: 2.9103830456733704e-11,
        cajaId: 4304,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
    ],
  },
  {
    id: 4303,
    inicio: 0.0,
    cierre: 775670.1300000001,
    enproceso: false,
    fecha: "2023-12-19T17:00:47.819-03:00",
    fechaCierre: "2023-12-19T21:06:34.917-03:00",
    ingreso: 787810.7400000001,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15065,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T00:06:34.917Z",
        diferencia: 0.0,
        cajaId: 4303,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15066,
        ingresoEfectivo: 5398.7,
        pendiente: 5398.7,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T00:06:34.917Z",
        diferencia: 0.0,
        cajaId: 4303,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15067,
        ingresoEfectivo: 231751.04,
        pendiente: 246715.28,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T00:06:34.917Z",
        diferencia: 14964.23999999999,
        cajaId: 4303,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15068,
        ingresoEfectivo: 140367.05,
        pendiente: 140365.06,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T00:06:34.917Z",
        diferencia: -1.9899999999906868,
        cajaId: 4303,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15069,
        ingresoEfectivo: 398153.34,
        pendiente: 395331.7,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-20T00:06:34.917Z",
        diferencia: -2821.640000000014,
        cajaId: 4303,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4302,
    inicio: 0.0,
    cierre: 378817.77,
    enproceso: false,
    fecha: "2023-12-19T08:23:35.727-03:00",
    fechaCierre: "2023-12-19T12:41:50.247-03:00",
    ingreso: 386761.78400000004,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15060,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T15:41:50.247Z",
        diferencia: 0.0,
        cajaId: 4302,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15061,
        ingresoEfectivo: 67357.16,
        pendiente: 67357.16,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T15:41:50.247Z",
        diferencia: 0.0,
        cajaId: 4302,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15062,
        ingresoEfectivo: 197844.24,
        pendiente: 208664.21400000004,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T15:41:50.247Z",
        diferencia: 10819.974000000046,
        cajaId: 4302,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15063,
        ingresoEfectivo: 32116.37,
        pendiente: 32116.370000000003,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T15:41:50.247Z",
        diferencia: 3.637978807091713e-12,
        cajaId: 4302,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15064,
        ingresoEfectivo: 81500.0,
        pendiente: 78624.04000000001,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T15:41:50.247Z",
        diferencia: -2875.959999999992,
        cajaId: 4302,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4301,
    inicio: 0.0,
    cierre: 433978.73,
    enproceso: false,
    fecha: "2023-12-18T17:06:43.939-03:00",
    fechaCierre: "2023-12-18T21:08:55.368-03:00",
    ingreso: 435919.6800000001,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15056,
        ingresoEfectivo: 145439.15,
        pendiente: 145439.13,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T00:08:55.368Z",
        diferencia: -0.01999999998952262,
        cajaId: 4301,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15057,
        ingresoEfectivo: 152985.7,
        pendiente: 152985.7,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T00:08:55.368Z",
        diferencia: 0.0,
        cajaId: 4301,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15058,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T00:08:55.368Z",
        diferencia: 0.0,
        cajaId: 4301,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15059,
        ingresoEfectivo: 135553.88,
        pendiente: 137494.85,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T00:08:55.368Z",
        diferencia: 1940.9700000000012,
        cajaId: 4301,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
      {
        id: 15055,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-19T00:08:55.368Z",
        diferencia: 0.0,
        cajaId: 4301,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
    ],
  },
  {
    id: 4300,
    inicio: 0.0,
    cierre: 593000.0,
    enproceso: false,
    fecha: "2023-12-18T14:17:10.475-03:00",
    fechaCierre: "2023-12-18T14:18:31.541-03:00",
    ingreso: 559296.14,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15050,
        ingresoEfectivo: 593000.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T17:18:31.541Z",
        diferencia: -593000.0,
        cajaId: 4300,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15051,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T17:18:31.541Z",
        diferencia: 0.0,
        cajaId: 4300,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15052,
        ingresoEfectivo: 0.0,
        pendiente: 559296.14,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T17:18:31.541Z",
        diferencia: 559296.14,
        cajaId: 4300,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15053,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T17:18:31.541Z",
        diferencia: 0.0,
        cajaId: 4300,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15054,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T17:18:31.541Z",
        diferencia: 0.0,
        cajaId: 4300,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4299,
    inicio: 0.0,
    cierre: 237727.46,
    enproceso: false,
    fecha: "2023-12-18T08:41:53.343-03:00",
    fechaCierre: "2023-12-18T12:37:00.399-03:00",
    ingreso: 233390.16,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15045,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T15:37:00.399Z",
        diferencia: 0.0,
        cajaId: 4299,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15046,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T15:37:00.399Z",
        diferencia: 0.0,
        cajaId: 4299,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15047,
        ingresoEfectivo: 25271.59,
        pendiente: 25271.59,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T15:37:00.399Z",
        diferencia: 0.0,
        cajaId: 4299,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15048,
        ingresoEfectivo: 64556.31,
        pendiente: 64739.31,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T15:37:00.399Z",
        diferencia: 183.0,
        cajaId: 4299,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15049,
        ingresoEfectivo: 147899.56,
        pendiente: 143379.26,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-18T15:37:00.399Z",
        diferencia: -4520.299999999988,
        cajaId: 4299,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4298,
    inicio: 0.0,
    cierre: 674150.64,
    enproceso: false,
    fecha: "2023-12-16T16:57:17.06-03:00",
    fechaCierre: "2023-12-16T21:17:46.587-03:00",
    ingreso: 678170.22,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15040,
        ingresoEfectivo: 59404.35,
        pendiente: 59404.35,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-17T00:17:46.587Z",
        diferencia: 0.0,
        cajaId: 4298,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15041,
        ingresoEfectivo: 131624.41,
        pendiente: 138624.62,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-17T00:17:46.587Z",
        diferencia: 7000.209999999992,
        cajaId: 4298,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15042,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-17T00:17:46.587Z",
        diferencia: 0.0,
        cajaId: 4298,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15043,
        ingresoEfectivo: 187281.88,
        pendiente: 187266.88,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-17T00:17:46.587Z",
        diferencia: -15.0,
        cajaId: 4298,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15044,
        ingresoEfectivo: 295840.0,
        pendiente: 292874.37,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-17T00:17:46.587Z",
        diferencia: -2965.6300000000047,
        cajaId: 4298,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4297,
    inicio: 0.0,
    cierre: 545269.42,
    enproceso: false,
    fecha: "2023-12-16T08:27:41.487-03:00",
    fechaCierre: "2023-12-16T12:40:26.316-03:00",
    ingreso: 545547.26,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15035,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T15:40:26.316Z",
        diferencia: 0.0,
        cajaId: 4297,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15036,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T15:40:26.316Z",
        diferencia: 0.0,
        cajaId: 4297,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15037,
        ingresoEfectivo: 13200.01,
        pendiente: 13200.01,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T15:40:26.316Z",
        diferencia: 0.0,
        cajaId: 4297,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15038,
        ingresoEfectivo: 135669.41,
        pendiente: 135669.4,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T15:40:26.316Z",
        diferencia: -0.010000000009313226,
        cajaId: 4297,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15039,
        ingresoEfectivo: 396400.0,
        pendiente: 396677.85,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T15:40:26.316Z",
        diferencia: 277.8499999999767,
        cajaId: 4297,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4296,
    inicio: 0.0,
    cierre: 825421.49,
    enproceso: false,
    fecha: "2023-12-15T17:00:58.344-03:00",
    fechaCierre: "2023-12-15T21:18:55.065-03:00",
    ingreso: 826195.63,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15030,
        ingresoEfectivo: 20000.0,
        pendiente: 20042.48,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T00:18:55.065Z",
        diferencia: 42.47999999999956,
        cajaId: 4296,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15031,
        ingresoEfectivo: 176022.0,
        pendiente: 154950.1,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T00:18:55.065Z",
        diferencia: -21071.899999999994,
        cajaId: 4296,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15032,
        ingresoEfectivo: 0.0,
        pendiente: 7370.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T00:18:55.065Z",
        diferencia: 7370.0,
        cajaId: 4296,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15033,
        ingresoEfectivo: 269399.49,
        pendiente: 279822.64,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T00:18:55.065Z",
        diferencia: 10423.150000000023,
        cajaId: 4296,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15034,
        ingresoEfectivo: 360000.0,
        pendiente: 364010.41,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-16T00:18:55.065Z",
        diferencia: 4010.4099999999744,
        cajaId: 4296,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4295,
    inicio: 0.0,
    cierre: 409954.26,
    enproceso: false,
    fecha: "2023-12-15T08:23:44.374-03:00",
    fechaCierre: "2023-12-15T12:38:55.969-03:00",
    ingreso: 410613.41000000003,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15025,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T15:38:55.969Z",
        diferencia: 0.0,
        cajaId: 4295,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15026,
        ingresoEfectivo: 93133.9,
        pendiente: 93133.89,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T15:38:55.969Z",
        diferencia: -0.00999999999476131,
        cajaId: 4295,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15027,
        ingresoEfectivo: 42682.23,
        pendiente: 42682.229999999996,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T15:38:55.969Z",
        diferencia: -7.275957614183426e-12,
        cajaId: 4295,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15028,
        ingresoEfectivo: 70450.87,
        pendiente: 70450.88,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T15:38:55.969Z",
        diferencia: 0.010000000009313226,
        cajaId: 4295,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15029,
        ingresoEfectivo: 203687.26,
        pendiente: 204346.41,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T15:38:55.969Z",
        diferencia: 659.1499999999942,
        cajaId: 4295,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4294,
    inicio: 0.0,
    cierre: 807677.98,
    enproceso: false,
    fecha: "2023-12-14T17:05:25.091-03:00",
    fechaCierre: "2023-12-14T21:14:06.129-03:00",
    ingreso: 815568.7500000001,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15024,
        ingresoEfectivo: 284587.0,
        pendiente: 284579.23,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T00:14:06.129Z",
        diferencia: -7.7700000000186265,
        cajaId: 4294,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
      {
        id: 15020,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T00:14:06.129Z",
        diferencia: 0.0,
        cajaId: 4294,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15021,
        ingresoEfectivo: 120384.26,
        pendiente: 128283.25,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T00:14:06.129Z",
        diferencia: 7898.990000000005,
        cajaId: 4294,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15022,
        ingresoEfectivo: 91103.37,
        pendiente: 91103.37,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T00:14:06.129Z",
        diferencia: 0.0,
        cajaId: 4294,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15023,
        ingresoEfectivo: 311603.35,
        pendiente: 311602.89999999997,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-15T00:14:06.129Z",
        diferencia: -0.45000000001164153,
        cajaId: 4294,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
    ],
  },
  {
    id: 4293,
    inicio: 0.0,
    cierre: 230221.89,
    enproceso: false,
    fecha: "2023-12-14T08:32:30.338-03:00",
    fechaCierre: "2023-12-14T12:33:25.894-03:00",
    ingreso: 226908.55999999997,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15015,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T15:33:25.893Z",
        diferencia: 0.0,
        cajaId: 4293,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15016,
        ingresoEfectivo: 54524.01,
        pendiente: 57812.21,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T15:33:25.894Z",
        diferencia: 3288.199999999997,
        cajaId: 4293,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15017,
        ingresoEfectivo: 17706.4,
        pendiente: 17706.4,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T15:33:25.894Z",
        diferencia: 0.0,
        cajaId: 4293,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15018,
        ingresoEfectivo: 52611.48,
        pendiente: 52611.479999999996,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T15:33:25.894Z",
        diferencia: -7.275957614183426e-12,
        cajaId: 4293,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15019,
        ingresoEfectivo: 105380.0,
        pendiente: 98778.47,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T15:33:25.894Z",
        diferencia: -6601.529999999999,
        cajaId: 4293,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4292,
    inicio: 0.0,
    cierre: 48465.0,
    enproceso: false,
    fecha: "2023-12-13T21:12:20.875-03:00",
    fechaCierre: "2023-12-13T21:26:43.324-03:00",
    ingreso: 48465.0,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15010,
        ingresoEfectivo: 48465.0,
        pendiente: 48465.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:26:43.324Z",
        diferencia: 0.0,
        cajaId: 4292,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15011,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:26:43.324Z",
        diferencia: 0.0,
        cajaId: 4292,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15012,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:26:43.324Z",
        diferencia: 0.0,
        cajaId: 4292,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15013,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:26:43.324Z",
        diferencia: 0.0,
        cajaId: 4292,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15014,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:26:43.324Z",
        diferencia: 0.0,
        cajaId: 4292,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4291,
    inicio: 0.0,
    cierre: 808272.1730000001,
    enproceso: false,
    fecha: "2023-12-13T16:57:42.355-03:00",
    fechaCierre: "2023-12-13T21:10:48.9-03:00",
    ingreso: 1084981.24,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15008,
        ingresoEfectivo: 548910.32,
        pendiente: 548910.3200000001,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:10:48.900Z",
        diferencia: 1.1641532182693481e-10,
        cajaId: 4291,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15009,
        ingresoEfectivo: 436.153,
        pendiente: 277145.19,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:10:48.900Z",
        diferencia: 276709.037,
        cajaId: 4291,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
      {
        id: 15005,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:10:48.900Z",
        diferencia: 0.0,
        cajaId: 4291,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15006,
        ingresoEfectivo: 254815.57,
        pendiente: 254815.65,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:10:48.900Z",
        diferencia: 0.07999999998719431,
        cajaId: 4291,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15007,
        ingresoEfectivo: 4110.13,
        pendiente: 4110.08,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-14T00:10:48.900Z",
        diferencia: -0.0500000000001819,
        cajaId: 4291,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
    ],
  },
  {
    id: 4290,
    inicio: 0.0,
    cierre: 274031.06,
    enproceso: false,
    fecha: "2023-12-13T08:31:44.346-03:00",
    fechaCierre: "2023-12-13T12:32:24.985-03:00",
    ingreso: 272541.37999999995,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 15000,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T15:32:24.985Z",
        diferencia: 0.0,
        cajaId: 4290,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 15001,
        ingresoEfectivo: 58366.59,
        pendiente: 58366.59,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T15:32:24.985Z",
        diferencia: 0.0,
        cajaId: 4290,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 15002,
        ingresoEfectivo: 72003.31,
        pendiente: 72003.31,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T15:32:24.985Z",
        diferencia: 0.0,
        cajaId: 4290,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 15003,
        ingresoEfectivo: 48601.16,
        pendiente: 48601.16,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T15:32:24.985Z",
        diferencia: 0.0,
        cajaId: 4290,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 15004,
        ingresoEfectivo: 95060.0,
        pendiente: 93570.31999999999,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T15:32:24.985Z",
        diferencia: -1489.6800000000076,
        cajaId: 4290,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
  },
  {
    id: 4289,
    inicio: 0.0,
    cierre: 495637.58,
    enproceso: false,
    fecha: "2023-12-12T16:54:28.67-03:00",
    fechaCierre: "2023-12-12T21:07:39.689-03:00",
    ingreso: 549153.6999999998,
    egreso: 0.0,
    userId: 3,
    userLogin: "admin",
    puntoDeVentaId: 1,
    puntoDeVentaNombre: "CASA CENTRAL",
    flujoCajas: [
      {
        id: 14995,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T00:07:39.689Z",
        diferencia: 0.0,
        cajaId: 4289,
        tipoPagoId: 5,
        tipoPagoNombre: "CUENTA CORRIENTE PROVEEDOR              ",
      },
      {
        id: 14996,
        ingresoEfectivo: 0.0,
        pendiente: 0.0,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T00:07:39.689Z",
        diferencia: 0.0,
        cajaId: 4289,
        tipoPagoId: 3,
        tipoPagoNombre: "TARJETA CREDITO                         ",
      },
      {
        id: 14997,
        ingresoEfectivo: 182390.23,
        pendiente: 241398.11,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T00:07:39.689Z",
        diferencia: 59007.879999999976,
        cajaId: 4289,
        tipoPagoId: 4,
        tipoPagoNombre: "CUENTA CORRIENTE                        ",
      },
      {
        id: 14998,
        ingresoEfectivo: 99947.35,
        pendiente: 99947.35,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T00:07:39.689Z",
        diferencia: 0.0,
        cajaId: 4289,
        tipoPagoId: 2,
        tipoPagoNombre: "TARJETA DEBITO                          ",
      },
      {
        id: 14999,
        ingresoEfectivo: 213300.0,
        pendiente: 207808.24,
        egreso: null,
        motivo: null,
        fechaHora: "2023-12-13T00:07:39.689Z",
        diferencia: -5491.760000000009,
        cajaId: 4289,
        tipoPagoId: 1,
        tipoPagoNombre: "EFECTIVO                                ",
      },
    ],
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

function formatearFechaHora(cadenaFechaHora: string, isDate?: boolean) {
  const fecha = new Date(cadenaFechaHora);

  const fechaFormateada = fecha.toLocaleDateString("en-US").replace(/\//g, "-");
  const horaFormateada = fecha.toLocaleTimeString("en-US");

  return `${isDate ? fechaFormateada : horaFormateada}`;
}

export default function CajaComponent({
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
      <Header title="Cajas" />
      <section className="relative overflow-x-auto shadow-md items-center mx-auto tableScroll">
        <Table
          thead={
            <tr className="thead">
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Hora Inicio</th>
              <th>Hora Cierre</th>
              <th className="text-center">Ingreso ($)</th>
              <th className="text-center">Egreso ($)</th>
              <th className="text-center">Cierre ($)</th>
              <th className="text-right">Diferencia ($)</th>
              <th className="text-center max-w-[25px]">Info</th>
              <th className="text-center max-w-[25px]">Mov.</th>
              <th className="text-center max-w-[25px]">Elim.</th>
            </tr>
          }
          tbody={cajas.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.userLogin}</td>
                <td>{formatearFechaHora(e.fecha, true)}</td>
                <td>{formatearFechaHora(e.fecha)}</td>
                <td>{formatearFechaHora(e.fechaCierre)}</td>

                <td className={` text-center`}>
                  {formatMoneyUSD(e.egreso.toFixed(2))}
                </td>
                <td className={` text-center`}>
                  {formatMoneyUSD(e.ingreso.toFixed(2))}
                </td>
                <td className={` text-center`}>
                  {formatMoneyUSD(e.cierre.toFixed(2))}
                </td>
                <td
                  className={`text-right font-bold ${
                    e.ingreso + e.egreso - e.cierre < 0
                      ? "text-red-500"
                      : "text-green-700"
                  }`}
                >
                  {formatMoneyUSD(e.ingreso + e.egreso - e.cierre)}
                </td>

                <td className="iconStyle">
                  <HiOutlineEye
                    className="w-6 h-6 iconHover"
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
                    className="w-6 h-6 iconHover"
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
      <Modal setOpen={setOpen} open={open} title="Información sobre caja">
        {typeModal === "view" ? (
          <>
            <Table
              thead={
                <tr className="thead">
                  <th>Tipo Pago</th>
                  <th>Ingreso sistema ($)</th>
                  <th>Ingreso declarado ($)</th>
                  <th>Diferencia</th>
                </tr>
              }
              tbody={cajaSelected.flujoCajas?.map((e: any) => {
                return (
                  <tr key={e.id}>
                    <td>{e.tipoPagoNombre}</td>

                    <td className={` text-center`}>
                      {formatMoneyUSD(e.ingresoEfectivo.toFixed(2))}
                    </td>
                    <td className={` text-center`}>
                      {formatMoneyUSD(e.pendiente.toFixed(2))}
                    </td>
                    <td
                      className={`text-right font-bold ${
                        e.diferencia < 0 ? "text-red-500" : "text-green-700"
                      }`}
                    >
                      {formatMoneyUSD(e.diferencia)}
                    </td>
                  </tr>
                );
              })}
            />
            <footer className="flex items-end justify-end">
              <div className="flex items-end mt-4 bg-gray-200 rounded-sm p-2">
                <h5 className="mr-4">Total:</h5>
                <h5
                  className={`text-right font-bold ${
                    cajaSelected.ingreso +
                      cajaSelected.egreso -
                      cajaSelected.cierre <
                    0
                      ? "text-red-500"
                      : "text-green-700"
                  }`}
                >
                  {formatMoneyUSD(
                    cajaSelected.ingreso +
                      cajaSelected.egreso -
                      cajaSelected.cierre
                  )}
                </h5>
              </div>
            </footer>
          </>
        ) : facturaSelected?.id ? (
          <section>
            <header className="flex justify-between">
              <div>
                <h5>Fecha de creación:</h5>
                <h5>
                  {formatearFechaHora(facturaSelected.fechaCreacion, true) +
                    "," +
                    formatearFechaHora(facturaSelected.fechaCreacion)}
                </h5>
              </div>
              0. <h5>Cliente: {facturaSelected.clienteId}</h5>
            </header>

            <Table
              thead={
                <tr className="thead">
                  <th>Detalle</th>
                  <th>Cantidad</th>
                  <th>Precio costo ($)</th>
                  <th>Precio venta ($)</th>
                  <th>Total ($)</th>
                </tr>
              }
              tbody={facturaSelected.facturaRenglons?.map((e: any) => {
                return (
                  <tr key={e.id}>
                    <td className={` text-center`}>{e.detalle}</td>
                    <td className={` text-center`}>{e.cantidad}</td>

                    <td className={` text-center`}>
                      {formatMoneyUSD(e.precioCosto)}
                    </td>
                    <td className={` text-center`}>
                      {formatMoneyUSD(e.precioVenta)}
                    </td>
                    <td className={` text-center`}>
                      {formatMoneyUSD(e.precioVenta * e.cantidad)}
                    </td>
                  </tr>
                );
              })}
            />
            <footer>
              <h5>
                Subtotal: {formatMoneyUSD(facturaSelected.subtotal.toFixed(2))}
              </h5>
              <h5>
                Interes: {formatMoneyUSD(facturaSelected.interes.toFixed(2))}
              </h5>
              <h5>
                Descuento:{" "}
                {formatMoneyUSD(facturaSelected.descuento.toFixed(2))}
              </h5>
              <h5>Total: {formatMoneyUSD(facturaSelected.total.toFixed(2))}</h5>
            </footer>
            <Btn
              text="Back"
              type="back"
              action={() => setFacturaSelected([])}
            />
          </section>
        ) : (
          <Table
            thead={
              <tr className="thead">
                <th>Ingreso ($)</th>
                <th>Egreso ($)</th>
                <th>Tipo de movimiento</th>
                <th>Factura</th>
                <th>Tipo Pago</th>
              </tr>
            }
            tbody={movimientos?.map((e: any) => {
              return (
                <tr
                  key={e.id}
                  onClick={() => {
                    setFacturaSelected(factura);
                  }}
                >
                  <td className={` text-center`}>
                    {formatMoneyUSD(e.ingreso)}
                  </td>
                  <td className={` text-center`}>{formatMoneyUSD(e.egreso)}</td>
                  <td className={` text-center`}>{e.descripcion}</td>
                  <td className={` text-center`}>{e.cajaId}</td>
                  <td className={` text-center`}>{e.tipoPagoNombre}</td>
                </tr>
              );
            })}
          />
        )}
      </Modal>
    </div>
  );
}
