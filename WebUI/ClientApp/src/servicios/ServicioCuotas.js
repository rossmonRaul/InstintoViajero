import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "Cuota";

export const AgregarCuota = async (data) => {
    const url = `${controlador}/insertarCuota`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarCuota = async (data) => {
    const url = `${controlador}/actualizarCuota`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarCuota = async (id) => {
    const url = `${controlador}/eliminarCuota?idCuota=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerCuotas = async () => {
    const url = `${controlador}/ObtenerCuotas`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerCuota = async (id) => {
    const url = `${controlador}/ObtenerDetalleCuota/${id}`;
    return await ProcesarDatosApi('GET', url);
}