import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "tipomaterial";
const controladorGrupo = "grupotipomaterial";

export const AgregarTipoMateriales = async (data) => {
    const url = `${controlador}/InsertarTipoMaterial`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarTipoMateriales = async (data) => {
   
    const url = `${controlador}/ActualizarTipoMaterial`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarTipoMateriales = async (id) => {
    const url = `${controlador}/EliminarTipoMaterial/${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerTipoMateriales = async () => {
    const url = `${controlador}/ObtenerTipoMateriales`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerGrupoMateriales = async () => {
    const url = `${controladorGrupo}/ObtenerGrupoTiposMaterial`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerTipoMaterialesPorId = async (id) => {
    const url = `${controlador}/ObtenerDetalleTipoMaterialID/${id}`;
    return await ProcesarDatosApi('GET', url);
}