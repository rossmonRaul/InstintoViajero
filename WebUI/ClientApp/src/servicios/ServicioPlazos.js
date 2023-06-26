import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "plazo";

export const AgregarPlazo = async (data) => {
    const url = `${controlador}/insertarplazo`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarPlazo = async (data) => {
    const url = `${controlador}/actualizarplazo`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarPlazo = async (id) => {
    const url = `${controlador}/eliminarplazo?idPlazo=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerPlazos = async () => {
    const url = `${controlador}/ObtenerPlazos`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerPlazo = async (id) => {
    const url = `${controlador}/ObtenerDetallePlazo/${id}`;
    return await ProcesarDatosApi('GET', url);
}