import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "comision";
const controladorRol = "rol";

export const AgregarComision = async (data) => {
    const url = `${controlador}/insertarcomision`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarComision = async (data) => {
    const url = `${controlador}/actualizarcomision`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarComision = async (id) => {
    const url = `${controlador}/eliminarcomision?idComision=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerComisiones = async () => {
    const url = `${controlador}/ObtenerComisiones`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerComision = async (id) => {
    const url = `${controlador}/ObtenerDetalleComision/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerRoles = async () => {
    const url = `${controladorRol}/ObtenerRoles`;
    return await ProcesarDatosApi('GET', url);
}