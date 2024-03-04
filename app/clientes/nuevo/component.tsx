import BtnIcon from "@/components/btn/BtnIcon";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/Input";
import { InputCheck } from "@/components/input/InputCheck";
import { InputSelect } from "@/components/input/InputSelect";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import Link from "next/link";

type props = {
  form: any;
  setForm: React.Dispatch<React.SetStateAction<{}>>;
};

const PuntoDeVenta = [
  { value: 1, label: "CASA CENTRAL" },
  { value: 2, label: "Casa 2" },
];

const TipoDocumento = [
  { value: 1, label: "OTRO" },
  { value: 2, label: "CUIT" },
  { value: 3, label: "DNI" },
];

export const NewClientComponent = ({ form, setForm }: props) => {
  return (
    <div className="w-full">
      <Header title="Nuevo Cliente" />
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
            title="Apellido"
            attribute="apellido"
          />
          <Input
            setForm={setForm}
            form={form}
            title="Email"
            attribute="email"
          />
          <Input
            setForm={setForm}
            form={form}
            title="Telefono"
            attribute="telefono"
          />
        </div>
        <div className="w-full flex">
          <InputSelect
            options={TipoDocumento}
            form={form}
            setForm={setForm}
            attribute="tipoDoc"
            title="Tipo Documento"
          />
          <Input
            setForm={setForm}
            form={form}
            attribute="numeroDocumento"
            title="N° Documento"
          />
          <InputCheck
            setForm={setForm}
            form={form}
            title="Mayorista"
            attribute="mayorista"
            value={form.mayorista}
          />
          <InputCheck
            setForm={setForm}
            form={form}
            title="Empleado"
            attribute="empleado"
            value={form.empleado}
          />
          <InputCheck
            setForm={setForm}
            form={form}
            title="Activo"
            attribute="activo"
            value={form.activo}
          />
        </div>
        <div className="w-full flex"></div>
        <div className="w-full flex">
          <InputSelect
            options={PuntoDeVenta}
            form={form}
            setForm={setForm}
            attribute="provincia"
            title="Provincia"
          />
          <InputSelect
            options={PuntoDeVenta}
            form={form}
            setForm={setForm}
            attribute="departamento"
            title="Departamento"
          />
          <InputSelect
            options={PuntoDeVenta}
            form={form}
            setForm={setForm}
            attribute="localidad"
            title="Localidad"
          />
        </div>
        <div className="w-full flex">
          <Input
            setForm={setForm}
            form={form}
            title="Calle"
            attribute="calle"
          />
          <Input
            setForm={setForm}
            form={form}
            title="N° Calle"
            attribute="numeroDeCalle"
          />
          <Input setForm={setForm} form={form} title="Piso" attribute="piso" />
        </div>

        <div className="flex space-x-2">
          <Link href="/clientes">
            <BtnIcon text="Cancelar" type="Cancel">
              <MdOutlineCancel />
            </BtnIcon>
          </Link>
          <BtnIcon text="Guardar" type="Save">
            <FaRegSave />
          </BtnIcon>
        </div>
      </div>
    </div>
  );
};
