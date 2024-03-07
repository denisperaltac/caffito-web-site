"use client";
import { useEffect, useState } from "react";
import GestionDeStockComponent from "./component";
import axiosInstance, { baseURL } from "@/config/axiosConfig";
import { ProductsInterface } from "@/interfaces/products";
import toast from "react-hot-toast";
export default function GestionDeStockPage() {
  const [form, setForm] = useState({});
  const [resp, setResp] = useState(["Loading"]);
  const [disabledPaginator, setDisabledPaginator] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(20);
  const [size, setSize] = useState(10);
  const [products, setProducts] = useState([]);

  const onSubmit = () => {};

  useEffect(() => {
    getProducts();
  }, [page]);

  useEffect(() => {
    countProducts();
  }, []);

  const countProducts = () => {
    axiosInstance
      .get(`${baseURL}/api/productos/count`)
      .then((response) => setCount(response.data))
      .catch((err) => console.log("Error getting user data"));
  };

  const getProducts = () => {
    axiosInstance
      .get(
        `${baseURL}/api/productos?page=${page}&size=${size}&sort=nombre,asc&sort=id`
      )
      .then((response) => setProducts(response.data))
      .catch((err) => console.log("Error getting user data"));
  };

  const updateProductsPrice = (
    formProduct: ProductsInterface,
    cantidad: string,
    peso: string
  ) => {
    axiosInstance
      .put(
        `${baseURL}/api/productos/actualizastock?cantidad=${cantidad}&peso=${peso}&puntoDeVentaId=${formProduct.productoProveedors[0].puntoDeVentaId}`,
        formProduct
      )
      .then(() => {
        getProducts();
        toast.success("¡Producto actualizado!");
      })
      .catch((err) => console.log("Error getting user data"));
  };
  console.log(count);
  return (
    <GestionDeStockComponent
      setForm={setForm}
      form={form}
      page={page}
      count={count}
      setPage={setPage}
      updateProductsPrice={updateProductsPrice}
      resp={resp}
      setDisabledPaginator={setDisabledPaginator}
      disabledPaginator={disabledPaginator}
      size={size}
      setSize={setSize}
      products={products}
    />
  );
}
