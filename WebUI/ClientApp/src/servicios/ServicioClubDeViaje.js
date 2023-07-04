import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "ClubDeViaje";

export const ObtenerClubDeViaje = async() => {
    const url = `${controlador}/ObtenerClubDeViaje`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerClubDeViajePorId = async(id) => {
    const url = `${controlador}/ObtenerDetalleClubDeViajeID/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const InactivarClubDeViaje = async (id) => {
    const url = `${controlador}/EliminarClubDeViaje?idClubDeViaje=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const AgregarClubDeViaje = async (data) => {
    const url = `${controlador}/insertarClubDeViaje`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarClubDeViaje = async (data) => {
    const url = `${controlador}/actualizarClubDeViaje`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerTiposDeCuentas = async() => {
    const url = `${controlador}/ObtenerTiposDeCuentas`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerTiposDeTarjetas = async() => {
    const url = `${controlador}/ObtenerTiposDeTarjetas`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerFrecuenciasDePago = async() => {
    const url = `${controlador}/ObtenerFrecuenciasDePago`;
    return await ProcesarDatosApi('GET', url);
}

