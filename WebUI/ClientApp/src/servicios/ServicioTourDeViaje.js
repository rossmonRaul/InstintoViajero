import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "TourDeViaje";

export const ObtenerTourDeViaje = async() => {
    const url = `${controlador}/ObtenerTourDeViaje`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerTourDeViajePorId = async(id) => {
    const url = `${controlador}/ObtenerDetalleTourDeViajeID/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const InactivarTourDeViaje = async (id) => {
    const url = `${controlador}/EliminarTourDeViaje?idTourDeViaje=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const AgregarTourDeViaje = async (data) => {
    const url = `${controlador}/insertarTourDeViaje`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarTourDeViaje = async (data) => {
    const url = `${controlador}/actualizarTourDeViaje`;
    return await ProcesarDatosApi('PUT', url, data);
}
