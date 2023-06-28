import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "persona";
const controladorTipos = "tiposidentificacion";

export const AgregarPersona = async (data) => {
    const url = `${controlador}/insertarpersona`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarPersona = async (data) => {
    const url = `${controlador}/actualizarpersona`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarPersona = async (id) => {
    const url = `${controlador}/eliminarpersona?idPersona=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerPersonas = async () => {
    const url = `${controlador}/ObtenerPersonas`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPersona = async (id) => {
    const url = `${controlador}/ObtenerDetallePersona/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerTiposIdentificacion = async () => {
    const url = `${controladorTipos}/ObtenerTiposIdentificacion`;
    return await ProcesarDatosApi('GET', url);
}

