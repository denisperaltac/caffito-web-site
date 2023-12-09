"use client";

import React, { useEffect, useState } from "react";
import { SubRoute } from "./SubRoute";
import { usePathname } from "next/navigation";
import { Loader } from "../loader/Loader";
const Routes = [
  { title: "Inicio", route: "/" },
  {
    title: "Inventario",
    route: "/inventario",
    subRoutes: [
      { name: "Gestion de stock", route: "/inventario/gestionDeStock" },
      { name: "Movimiento Stock", route: "/inventario/movimientoStock" },
      { name: "Productos", route: "/inventario/productos" },
      { name: "Etiquetas", route: "/inventario/etiquetas" },
      { name: "Proveedor", route: "/inventario/proovedor" },
      { name: "Categorias", route: "/inventario/categorias" },
      { name: "Marcas", route: "/inventario/marcas" },
      { name: "Rubro", route: "/inventario/rubro" },
      { name: "Impuesto", route: "/inventario/impuesto" },
    ],
  },
  { title: "Configuraciones", route: "/configuraciones" },
  { title: "Caja", route: "/caja" },
  { title: "Ventas", route: "/ventas" },
  { title: "Facturación", route: "/facturacion" },
  { title: "Informes", route: "/informes" },
  { title: "Clientes", route: "/clientes" },
  { title: "Administración", route: "/administracion" },
  { title: "Cuenta", route: "/cuenta" },
];
export const Navbar = () => {
  const [newPathName, setNewPathName] = useState();
  const pathName = usePathname();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(pathName);
    if (pathName !== newPathName) {
      setNewPathName(pathName);
      setLoading(false);
    }
  }, [pathName]);
  return (
    <nav className="flex p-2 border-b-2 border-red-700">
      {Routes.map((e) => (
        <div key={e.route}>
          <SubRoute
            Route={e}
            subRoute={e.subRoutes ? true : false}
            setLoading={setLoading}
            pathName={pathName}
          />
        </div>
      ))}
      <Loader loading={loading}></Loader>
    </nav>
  );
};
