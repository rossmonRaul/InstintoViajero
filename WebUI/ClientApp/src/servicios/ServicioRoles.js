import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "rol";

export const AgregarRol = async (data) => {
    const url = `${controlador}/insertarrol`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarRol = async (data) => {
    const url = `${controlador}/actualizarrol`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarRol = async (id) => {
    const url = `${controlador}/eliminarrol?idRol=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerRoles = async () => {
    const url = `${controlador}/ObtenerRoles`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerRol = async (id) => {
    const url = `${controlador}/ObtenerDetalleRol/${id}`;
    return await ProcesarDatosApi('GET', url);
}
