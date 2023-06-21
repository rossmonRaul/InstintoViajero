import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "direcciones";

export const ObtenerProvinciasService = async() => {
    const url = `${controlador}/ObtenerProvincias`;
    return await ProcesarDatosApi('GET', url);
}
export const ObtenerCantonesService = async(idProvincia) => {
    const url = `${controlador}/ObtenerCantones/${idProvincia}`;
    return await ProcesarDatosApi('GET', url);
}
export const ObtenerDistritosService = async(canton) => {
    const url = `${controlador}/ObtenerDistritos/${canton}`;
    return await ProcesarDatosApi('GET', url);
}

