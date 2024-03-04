import { useState } from "react";
import BtnIcon from "@/components/btn/BtnIcon";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/Input";
import { InputCheck } from "@/components/input/InputCheck";
import { InputSelect } from "@/components/input/InputSelect";
import { Table } from "@/components/table/Table";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import Link from "next/link";

type props = {
  form: any;
  setForm: React.Dispatch<React.SetStateAction<{}>>;
};

const valuePost = {
  codigoReferencia: "76222017041481231231",
  nombre: "Testing",
  cantidad: 5,
  borrado: false,
  categoriaId: {
    id: 1,
    nombre: "ALMACEN                                           ",
    rubroId: null,
  },
  marcaId: {
    id: 6,
    nombre: "MAXICONSUMO                                       ",
  },
  productoProveedors: [
    {
      precioCosto: 300,
      precioVenta: 400,
      precioMayorista: 400,
      cantidad: 5,
      activo: false,
      pesototal: null,
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
      puntoDeVentaNombre: "CASA CENTRAL",
      puntoDeVentaId: 1,
    },
  ],
};

const PuntoDeVenta = [
  { value: 1, label: "CASA CENTRAL" },
  { value: 2, label: "Casa 2" },
];

export const NewProductComponent = ({ form, setForm }: props) => {
  const [arrayProducList, setArrayProductList] = useState<any[]>([]);

  const isDisabledSave =
    form.nombre &&
    form.codigoReferencia &&
    form.categoria &&
    form.marca &&
    arrayProducList.length > 0
      ? false
      : true;
  const isDisabledProduct =
    form.PrecioVenta && form.PrecioCosto && form.proovedor && form.puntoVenta
      ? false
      : true;

  return (
    <div className="w-full">
      <Header title="Nuevo Producto" />
      <div className="w-full  flex flex-col p-2 my-2">
        <div className="w-full flex">
          <Input
            setForm={setForm}
            form={form}
            title="Nombre"
            attribute="nombre"
          />
          <Input
            setForm={setForm}
            form={form}
            title="Codigo (PLU)"
            attribute="codigoReferencia"
          />
        </div>
        <div className="w-full flex">
          <InputSelect
            options={PuntoDeVenta}
            form={form}
            setForm={setForm}
            attribute="categoria"
            title="Categoria"
          />
          <InputSelect
            options={PuntoDeVenta}
            form={form}
            setForm={setForm}
            attribute="marca"
            title="Marca"
          />
          <InputSelect
            options={PuntoDeVenta}
            form={form}
            setForm={setForm}
            attribute="impuesto"
            title="Impuesto"
          />
          <InputCheck
            setForm={setForm}
            form={form}
            title="Pesable"
            attribute="Pesable"
            value={form.Pesable}
          />
        </div>
        <div className="w-full flex flex-col border-2 border-gray-300 p-2 my-2">
          <div className="w-full flex">
            <InputSelect
              options={PuntoDeVenta}
              form={form}
              setForm={setForm}
              attribute="puntoVenta"
              title="Punto de venta"
            />

            <InputSelect
              options={PuntoDeVenta}
              form={form}
              setForm={setForm}
              attribute="proovedor"
              title="Proovedor"
            />
          </div>
          <div className="w-full flex">
            <Input
              setForm={setForm}
              form={form}
              title="Cantidad"
              attribute="Cantidad"
            />
            <Input
              setForm={setForm}
              form={form}
              title="Punto pedido (Optional)"
              attribute="Puntopedido"
            />
            <Input
              setForm={setForm}
              form={form}
              title="Stock ideal (Optional)"
              attribute="Stockideal"
            />
          </div>

          <div className="w-full flex items-center">
            <Input
              setForm={setForm}
              form={form}
              title="Precio Costo"
              attribute="PrecioCosto"
            />
            <Input
              setForm={setForm}
              form={form}
              title="Precio Venta"
              attribute="PrecioVenta"
            />

            <Input
              setForm={setForm}
              form={form}
              title="Precio Mayorista (Optional)"
              attribute="PrecioMayorista"
            />
            <BtnIcon
              text="Agregar"
              type="Save"
              disabled={isDisabledProduct}
              action={() => {
                let arrayProduct = {
                  PrecioVenta: form.PrecioVenta,
                  PrecioMayorista: form.PrecioMayorista,
                  PrecioCosto: form.PrecioCosto,
                  Stockideal: form.Stockideal,
                  Puntopedido: form.Puntopedido,
                  Cantidad: form.Cantidad,
                  proovedor: form.proovedor,
                  puntoVenta: form.puntoVenta,
                };
                setArrayProductList([arrayProduct]);
              }}
            >
              <FaPlus />
            </BtnIcon>
          </div>
          <Table
            thead={
              <tr className="thead">
                <th>Sucursal</th>
                <th>Proveedor</th>
                <th>Costo ($)</th>
                <th>Venta ($)</th>
                <th>Mayorista ($)</th>
                <th>Cantidad</th>
                <th>Pto. pedido</th>
                <th>Stock ideal</th>
                <th>Acciones</th>
              </tr>
            }
            tbody={arrayProducList.map((e: any) => {
              return (
                <tr key={e.id}>
                  <td>{e.tipoPagoNombre}</td>

                  <td className={` text-center`}></td>
                  <td className={` text-center`}></td>
                  <td
                    className={`text-right font-bold ${
                      e.diferencia < 0 ? "text-red-500" : "text-green-700"
                    }`}
                  ></td>
                </tr>
              );
            })}
          />
        </div>
        <div className="flex space-x-2">
          <Link href="/inventario/productos">
            <BtnIcon text="Cancelar" type="Cancel">
              <MdOutlineCancel />
            </BtnIcon>
          </Link>
          <BtnIcon text="Guardar" type="Save" disabled={isDisabledSave}>
            <FaRegSave />
          </BtnIcon>
        </div>
      </div>
    </div>
  );
};
