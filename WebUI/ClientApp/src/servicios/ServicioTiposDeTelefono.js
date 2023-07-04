import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "tipoDeTelefono";

export const AgregarTipoDeTelefono = async (data) => {
    const url = `${controlador}/insertartipoDeTelefono`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarTipoDeTelefono = async (data) => {
    const url = `${controlador}/actualizartipoDeTelefono`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarTipoDeTelefono = async (id) => {
    const url = `${controlador}/eliminartipoDeTelefono?idTipoDeTelefono=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerTiposDeTelefono = async () => {
    const url = `${controlador}/ObtenerTiposDeTelefono`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerTipoDeTelefono = async (id) => {
    const url = `${controlador}/ObtenerDetalleTipoDeTelefono/${id}`;
    return await ProcesarDatosApi('GET', url);
}