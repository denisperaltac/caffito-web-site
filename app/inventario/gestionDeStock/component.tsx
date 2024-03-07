"use client";
import BtnIcon from "@/components/btn/BtnIcon";
import { Input } from "@/components/input/Input";
import { Table } from "@/components/table/Table";
import formatMoneyUSD from "@/services/FormatMoneyUSD";
import { useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaRegSave } from "react-icons/fa";
import Paginator from "@/components/paginator/Paginator";
import { Header } from "@/components/header/header";
import { ProductsInterface } from "@/interfaces/products";

import { Toaster } from "react-hot-toast";

export default function GestionDeStockComponent({
  setForm,
  form,
  page,
  count,
  setPage,
  updateProductsPrice,
  resp,
  setDisabledPaginator,
  disabledPaginator,
  size,
  setSize,
  products,
}: any) {
  const [openFilter, setOpenFilter] = useState(false);
  const [formProduct, setFormProduct] = useState<any>({});
  const [porcentaje, setPorcentaje] = useState<any>();
  const [porcentajeMay, setPorcentajeMay] = useState<any>();
  const [nuevoPeso, setNuevoPeso] = useState<any>(0);
  const [nuevaCantidad, setNuevaCantidad] = useState<any>(0);
  console.log(formProduct);

  useEffect(() => {
    if (formProduct?.productoProveedors) {
      const precioVenta =
        (Number(porcentaje) / 100 + 1) *
        formProduct.productoProveedors[0]?.precioCosto;
      const precioMayorista =
        (Number(porcentajeMay) / 100 + 1) *
        formProduct.productoProveedors[0]?.precioCosto;

      setFormProduct((prevFormProduct: any) => ({
        ...prevFormProduct,
        productoProveedors: [
          {
            ...prevFormProduct.productoProveedors[0],
            precioVenta: precioVenta.toFixed(2),
            precioMayorista: precioMayorista.toFixed(2),
          },
        ],
      }));
    }
  }, [
    porcentaje,
    porcentajeMay,

    formProduct?.productoProveedors &&
      formProduct?.productoProveedors[0]?.precioCosto,
  ]);
  return (
    <div className="w-full">
      <header className="mb-4">
        <Header title="Gestion de stock">
          <BtnIcon
            text="Filtros"
            type="Save"
            action={() => setOpenFilter(!openFilter)}
          >
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
          tbody={products.map((e: ProductsInterface) => {
            let color =
              formProduct.id === e.id
                ? "bg-primary-blue-hover pointer-events-none"
                : "";
            return (
              <tr
                key={e.codigoReferencia}
                onClick={() => {
                  setFormProduct(e);
                  setNuevaCantidad(0);
                  setNuevoPeso(0);
                  const porcentajeVenta =
                    ((e.productoProveedors[0]?.precioVenta -
                      e.productoProveedors[0]?.precioCosto) /
                      e.productoProveedors[0]?.precioCosto) *
                    100;

                  const porcentajeMayorista =
                    ((e.productoProveedors[0]?.precioMayorista -
                      e.productoProveedors[0]?.precioCosto) /
                      e.productoProveedors[0]?.precioCosto) *
                    100;

                  setPorcentaje(porcentajeVenta.toFixed(2));
                  setPorcentajeMay(porcentajeMayorista.toFixed(2));
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
            Stock a agregar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={nuevaCantidad}
            autoComplete="off"
            type="text"
            placeholder={"..."}
            onChange={(e) => {
              setNuevaCantidad(e.target.value);
            }}
          />
        </div>
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
            onChange={(e) => {
              const updatedProductoProveedors = [
                ...formProduct?.productoProveedors,
              ];
              updatedProductoProveedors[0] = {
                ...updatedProductoProveedors[0],
                precioCosto: e.target.value,
              };
              setFormProduct({
                ...formProduct,
                productoProveedors: updatedProductoProveedors,
              });
            }}
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
                      formProduct?.productoProveedors[0]?.precioCosto
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
            type="Save"
            action={() =>
              updateProductsPrice(formProduct, nuevaCantidad, nuevoPeso)
            }
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
      <Toaster position="top-right" />
    </div>
  );
}
