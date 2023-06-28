import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "PaquetesDeViajes";

export const ObtenerPaquetesDeViajes = async() => {
    const url = `${controlador}/ObtenerPaquetesDeViajes`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPaquetesDeViajesPorId = async(id) => {
    const url = `${controlador}/ObtenerDetallePaquetesDeViajesID/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const InactivarPaquetesDeViajes = async (id) => {
    const url = `${controlador}/EliminarPaquetesDeViajes?idPaquetesDeViajes=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const AgregarPaquetesDeViajes = async (data) => {
    const url = `${controlador}/insertarPaquetesDeViajes`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarPaquetesDeViajes = async (data) => {
    const url = `${controlador}/actualizarPaquetesDeViajes`;
    return await ProcesarDatosApi('PUT', url, data);
}
