"use client";

import React, { useEffect, useState } from "react";
import { SubRoute } from "./SubRoute";
import { usePathname } from "next/navigation";
import { Loader } from "../loader/Loader";
import LogoCaffito from "@/assets/LogoCaffito.png";
import { BiHome } from "react-icons/bi";
import {
  BsBoxes,
  BsGraphUpArrow,
  BsShop,
  BsPersonGear,
  BsGear,
} from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { FaCashRegister } from "react-icons/fa6";

import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdLogout, MdOutlinePeopleAlt } from "react-icons/md";
import Image from "next/image";
import {
  FaBoxOpen,
  FaLock,
  FaPercent,
  FaRegBell,
  FaRegHeart,
  FaRegRegistered,
  FaTachometerAlt,
  FaTags,
  FaTools,
  FaTruck,
} from "react-icons/fa";
import { FaBoxesStacked, FaListCheck } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { PiTagChevronBold } from "react-icons/pi";

const Routes = [
  { title: "Inicio", route: "/", icon: <BiHome /> },
  {
    title: "Inventario",
    route: "/inventario",
    icon: <BsBoxes />,
    subRoutes: [
      {
        name: "Gestion de stock",
        route: "/inventario/gestionDeStock",
        icon: <FaBoxesStacked />,
      },
      // { name: "Movimiento Stock", route: "/inventario/movimiento-stock" },
      {
        name: "Productos",
        route: "/inventario/productos",
        icon: <FaBoxOpen />,
      },
      { name: "Etiquetas", route: "/inventario/etiquetas", icon: <FaTags /> },
      { name: "Proveedor", route: "/inventario/proovedor", icon: <FaTruck /> },
      {
        name: "Categorias",
        route: "/inventario/categorias",
        icon: <TbCategory2 />,
      },
      {
        name: "Marcas",
        route: "/inventario/marcas",
        icon: <FaRegRegistered />,
      },

      {
        name: "Rubro",
        route: "/inventario/rubro",
        icon: <PiTagChevronBold />,
      },
      { name: "Impuesto", route: "/inventario/impuesto", icon: <FaPercent /> },
    ],
  },

  { title: "Caja", route: "/caja", icon: <FaCashRegister /> },
  { title: "Ventas", route: "/ventas", icon: <BsShop /> },
  { title: "Facturación", route: "/facturacion", icon: <BsGraphUpArrow /> },
  { title: "Informes", route: "/informes", icon: <HiOutlineNewspaper /> },
  { title: "Clientes", route: "/clientes", icon: <MdOutlinePeopleAlt /> },
  {
    title: "Administración",
    route: "/administracion",
    icon: <IoPersonAddOutline />,
    subRoutes: [
      {
        name: "Gestion de usuarios",
        route: "/administracion/gestion-de-usuarios",
        icon: <BsPersonGear />,
      },

      {
        name: "Métricas",
        route: "/administracion/metricas",
        icon: <FaTachometerAlt />,
      },
      { name: "Salud", route: "/administracion/salud", icon: <FaRegHeart /> },
      {
        name: "Configuración",
        route: "/administracion/configuración",
        icon: <BsGear />,
      },
      {
        name: "Auditorías",
        route: "/administracion/auditorias",
        icon: <FaRegBell />,
      },
      { name: "Logs", route: "/administracion/logs", icon: <FaListCheck /> },
    ],
  },
  { title: "Configuraciones", route: "/configuraciones", icon: <GoGear /> },
  {
    title: "Cuenta",
    route: "/cuenta",
    icon: <BsPersonGear />,
    subRoutes: [
      {
        name: "Ajustes",
        route: "/cuenta/ajustes",
        icon: <FaTools />,
      },

      {
        name: "Contraseña",
        route: "/cuenta/contraseña",
        icon: <FaLock />,
      },
      {
        name: "Cerrar sesión",
        route: "/cerrar-sesion",
        icon: <MdLogout />,
      },
    ],
  },
];
export const Navbar = () => {
  const [newPathName, setNewPathName] = useState<string>();
  const pathName = usePathname();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathName !== newPathName) {
      setNewPathName(pathName);
      setLoading(false);
    }
  }, [pathName]);
  return (
    <nav className="flex border-b-2 border-red-700 justify-between text-center align-bottom	">
      <Image src={LogoCaffito} className="w-[60px] ml-4" alt="Logo Caffito" />
      <div className="flex items-center">
        {Routes.map((e) => (
          <div key={e.route}>
            <SubRoute
              Route={e}
              subRoute={e.subRoutes ? true : false}
              setLoading={setLoading}
              pathName={pathName}
              icon={e.icon}
            />
          </div>
        ))}
      </div>
      <Loader loading={loading}></Loader>
    </nav>
  );
};
