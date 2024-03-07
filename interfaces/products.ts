export interface ProductsInterface {
  id: number;
  codigoReferencia: string;
  nombre: string;
  cantidad: number;
  stockMax: number;
  stockMin: number;
  descripcion: string;
  borrado: boolean;
  categoriaId: CategoriaId;
  marcaId: MarcaId;
  impuestoId?: any;
  productoProveedors: ProductoProveedor[];
  peso: number;
  pesable?: any;
  cambioPrecio?: string;
}
interface ProductoProveedor {
  id: number;
  precioCosto: number;
  precioVenta: number;
  precioMayorista: number;
  cantidad: number;
  activo: boolean;
  pesounidad: number;
  pesototal: number;
  stockMin?: any;
  stockMax?: any;
  productoId: number;
  proveedor: Proveedor;
  puntoDeVentaId: number;
  puntoDeVentaNombre: string;
}
interface Proveedor {
  id: number;
  nombreProveedor: string;
  calle: string;
  numeroCalle: string;
  email: string;
  telefono: string;
  localidadId: LocalidadId;
}
interface LocalidadId {
  id: number;
  nombre: string;
  departamentoId: DepartamentoId;
}
interface DepartamentoId {
  id: number;
  nombre: string;
  provinciaId: MarcaId;
}
interface MarcaId {
  id: number;
  nombre: string;
}
interface CategoriaId {
  id: number;
  nombre: string;
  rubroId?: any;
}
