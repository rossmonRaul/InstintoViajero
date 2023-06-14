import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "cliente";
const controladorPersona = "persona";

export const AgregarCliente = async (data) => {
    const url = `${controlador}/insertarcliente`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarCliente = async (data) => {
    const url = `${controlador}/actualizarcliente`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarCliente = async (id) => {
    const url = `${controlador}/eliminarcliente?idCliente=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerClientes = async () => {
    const url = `${controlador}/ObtenerClientes`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerCliente = async (id) => {
    const url = `${controlador}/ObtenerDetalleCliente/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPersonas = async () => {
    const url = `${controladorPersona}/ObtenerPersonas`;
    return await ProcesarDatosApi('GET', url);
}