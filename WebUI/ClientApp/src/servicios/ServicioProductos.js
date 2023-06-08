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

export const AgregarProducto = async (data) => {
    const url = `${controlador}/insertarProducto`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarProducto = async (data) => {
    const url = `${controlador}/actualizarProducto`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerTiposProductos = async () => {
    const url = `${controlador}/obtenerTiposProductos`;
    return await ProcesarDatosApi('GET', url);
}