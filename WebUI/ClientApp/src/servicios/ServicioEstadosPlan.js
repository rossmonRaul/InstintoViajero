import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "estadoPlan";

export const AgregarEstadoPlan = async (data) => {
    const url = `${controlador}/insertarestadoPlan`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarEstadoPlan = async (data) => {
    const url = `${controlador}/actualizarestadoPlan`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarEstadoPlan = async (id) => {
    const url = `${controlador}/eliminarestadoPlan?idEstadoPlan=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerEstadosPlan = async () => {
    const url = `${controlador}/ObtenerEstadosPlan`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerEstadoPlan = async (id) => {
    const url = `${controlador}/ObtenerDetalleEstadoPlan/${id}`;
    return await ProcesarDatosApi('GET', url);
}