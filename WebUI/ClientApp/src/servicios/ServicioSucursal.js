import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "sucursal";

export const AgregarSucursal = async (data) => {
    const url = `${controlador}/insertarSucursal`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarSucursal = async (data) => {
    const url = `${controlador}/actualizarSucursal`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarSucursal = async (id) => {
    const url = `${controlador}/eliminarSucursal?idSucursal=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerSucursales = async() => {
    const url = `${controlador}/ObtenerSucursales`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerSucursalPorId = async(id) => {
    const url = `${controlador}/ObtenerDetalleSucursalID/${id}`;
    return await ProcesarDatosApi('GET', url);
}