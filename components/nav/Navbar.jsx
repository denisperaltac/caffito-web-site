"use client";

import React, { useEffect, useState } from "react";
import { SubRoute } from "./SubRoute";
import { usePathname } from "next/navigation";
import { Loader } from "../loader/Loader";
import LogoCaffito from "@/assets/LogoCaffito.png";
import { BiHome } from "react-icons/bi";
import { BsBoxes, BsGraphUpArrow, BsShop, BsPersonGear } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Routes = [
  { title: "Inicio", route: "/", icon: <BiHome /> },
  {
    title: "Inventario",
    route: "/inventario",
    icon: <BsBoxes />,
    subRoutes: [
      { name: "Gestion de stock", route: "/inventario/gestionDeStock" },
      // { name: "Movimiento Stock", route: "/inventario/movimientoStock" },
      { name: "Productos", route: "/inventario/productos" },
      { name: "Etiquetas", route: "/inventario/etiquetas" },
      { name: "Proveedor", route: "/inventario/proovedor" },
      { name: "Categorias", route: "/inventario/categorias" },
      { name: "Marcas", route: "/inventario/marcas" },
      // { name: "Rubro", route: "/inventario/rubro" },
      { name: "Impuesto", route: "/inventario/impuesto" },
    ],
  },

  { title: "Caja", route: "/caja", icon: <LiaCashRegisterSolid /> },
  { title: "Ventas", route: "/ventas", icon: <BsShop /> },
  { title: "Facturación", route: "/facturacion", icon: <BsGraphUpArrow /> },
  { title: "Informes", route: "/informes", icon: <HiOutlineNewspaper /> },
  { title: "Clientes", route: "/clientes", icon: <MdOutlinePeopleAlt /> },
  {
    title: "Administración",
    route: "/administracion",
    icon: <IoPersonAddOutline />,
  },
  { title: "Configuraciones", route: "/configuraciones", icon: <GoGear /> },
  { title: "Cuenta", route: "/cuenta", icon: <BsPersonGear /> },
];
export const Navbar = () => {
  const [newPathName, setNewPathName] = useState();
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
      <img src={LogoCaffito.src} alt="Logo Caffito" className="w-[60px] ml-4" />
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
