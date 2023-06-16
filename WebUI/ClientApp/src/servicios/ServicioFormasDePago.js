import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "FormasDePago";

export const ObtenerFormasDePagos = async() => {
    const url = `${controlador}/ObtenerFormasDePagos`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerFormasDePagoPorId = async(id) => {
    const url = `${controlador}/ObtenerDetalleFormasDePagoID/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const InactivarFormasDePago = async (id) => {
    const url = `${controlador}/EliminarFormasDePago?idFormasDePago=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const AgregarFormasDePago = async (data) => {
    const url = `${controlador}/insertarFormasDePago`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarFormasDePago = async (data) => {
    const url = `${controlador}/actualizarFormasDePago`;
    return await ProcesarDatosApi('PUT', url, data);
}
