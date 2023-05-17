import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "controldecalidad";
const controladorPlantas = "planta";
const controladorProductos = "producto";

export const AgregarControlDeCalidad = async (data) => {
    const url = `${controlador}/insertarcontroldecalidad`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarControlDeCalidad = async (data) => {
    const url = `${controlador}/actualizarcontroldecalidad`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerControlDeCalidad = async () => {
    const url = `${controlador}/ObtenerControlDeCalidad`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPlantas = async () => {
    const url = `${controladorPlantas}/ObtenerPlantas`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerProductos = async () => {
    const url = `${controladorProductos}/ObtenerProductos`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerControlDeCalidadPorId = async (id) => {
    const url = `${controlador}/obtenerdetallecontroldecalidadid/${id}`;
    return await ProcesarDatosApi('GET', url);
}
