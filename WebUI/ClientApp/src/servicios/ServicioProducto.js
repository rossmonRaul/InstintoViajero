import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "producto";
const controladorGrupo = "grupoproducto";

export const AgregarProducto = async (data) => {
    const url = `${controlador}/InsertarProducto`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarProducto = async (data) => {

    const url = `${controlador}/ActualizarProducto`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarProducto = async (id) => {
    const url = `${controlador}/EliminarProducto/${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerProductos = async () => {
    const url = `${controlador}/ObtenerProductos`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerGrupoProductos = async () => {
    const url = `${controladorGrupo}/ObtenerGrupoProductos`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerProductoPorId = async (id) => {
    const url = `${controlador}/ObtenerDetalleProductoID/${id}`;
    return await ProcesarDatosApi('GET', url);
}