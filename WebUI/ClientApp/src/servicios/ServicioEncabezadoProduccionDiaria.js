import { ProcesarDatosApi } from "../api/ApiFetch";
const controladorEncabezado = "encabezadoproducciondiaria"

export const ObtenerProduccionesDiarias = async (idPlanta, fecha) => {
    const url = `${controladorEncabezado}/ObtenerProducciones?idPlanta=${idPlanta}&Fecha=${fecha}`;
    return await ProcesarDatosApi('GET', url);
}