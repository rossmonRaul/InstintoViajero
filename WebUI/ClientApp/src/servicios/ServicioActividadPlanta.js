import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "actividadplanta";
const controladorPlantas = "planta";

export const AgregarActividadPlanta = async (data) => {
    const url = `${controlador}/insertaractividadplanta`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarActividadPlanta = async (data) => {
    const url = `${controlador}/actualizaractividadplanta`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarActividadPlanta = async (id) => {
    const url = `${controlador}/eliminaractividadplanta?idActividadPlanta=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerActividadesPlantas = async () => {
    const url = `${controlador}/ObtenerActividadesPlantas`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPlantas = async () => {
    const url = `${controladorPlantas}/ObtenerPlantas`;   
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerActividadPlantaPorId = async (id) => {
    const url = `${controlador}/obtenerdetalleactividadplantaid/${id}`;
    return await ProcesarDatosApi('GET', url);
}