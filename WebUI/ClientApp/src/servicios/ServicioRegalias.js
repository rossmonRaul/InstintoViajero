import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "Regalia";

export const AgregarRegalia = async (data) => {
    const url = `${controlador}/insertarRegalia`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarRegalia = async (data) => {
    const url = `${controlador}/actualizarRegalia`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarRegalia = async (id) => {
    const url = `${controlador}/eliminarRegalia?idRegalia=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerRegalias = async () => {
    const url = `${controlador}/ObtenerRegalias`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerRegalia = async (id) => {
    const url = `${controlador}/ObtenerDetalleRegalia/${id}`;
    return await ProcesarDatosApi('GET', url);
}