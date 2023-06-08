import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "producto";

export const ObtenerProductos = async() => {
    const url = `${controlador}/ObtenerProductos`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerProductoPorId = async(id) => {
    const url = `${controlador}/ObtenerDetalleProductoID/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const InactivarProducto = async (id) => {
    const url = `${controlador}/EliminarProducto?idProducto=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}