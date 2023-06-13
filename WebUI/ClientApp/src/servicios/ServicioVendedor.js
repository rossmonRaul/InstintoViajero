import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "vendedor";
const controladorSucursal = "Sucursal";
const controladorPersona = "persona";

export const AgregarVendedor = async (data) => {
    const url = `${controlador}/insertarvendedor`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarVendedor = async (data) => {
    const url = `${controlador}/actualizarvendedor`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarVendedor = async (id) => {
    const url = `${controlador}/eliminarvendedor?idVendedor=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerVendedores = async () => {
    const url = `${controlador}/ObtenerVendedores`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerVendedor = async (id) => {
    const url = `${controlador}/ObtenerDetalleVendedor/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerSucursales = async () => {
    const url = `${controladorSucursal}/ObtenerSucursales`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPersonas = async () => {
    const url = `${controladorPersona}/ObtenerPersonas`;
    return await ProcesarDatosApi('GET', url);
}