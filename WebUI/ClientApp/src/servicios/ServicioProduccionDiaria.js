import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "horario";

export const ObtenerHorarios = async () => {
    const url = `${controlador}/ObtenerHorarios`;
    return await ProcesarDatosApi('GET', url);
}

/**
 * Encabezado 
 */
export const AgregarEncabezadoProduccionDiaria = async (data) => {
    const url = `EncabezadoProduccionDiaria/insertarencabezadoproducciondiaria`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarEncabezadoProduccionDiaria = async (data) => {
    const url = `EncabezadoProduccionDiaria/actualizarencabezadoproducciondiaria`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerEncabezadoProduccionDiaria = async (data) => {
    const url = `EncabezadoProduccionDiaria/ObtenerEncabezadoProduccionDiaria?idPlanta=${data.idPlanta}&fecha=${data.fecha}&idProducto=${data.idProducto}`;
    return await ProcesarDatosApi('GET', url);
}

/**
 * Encabezado 
 */

/**
 * desglose 
 */

export const AgregarDetalleProduccionDiaria = async (data) => {
    const url = `DetalleProduccionDiaria/insertardetalleproducciondiaria`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarDetalleProduccionDiaria = async (data) => {
    const url = `DetalleProduccionDiaria/actualizardetalleproducciondiaria`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerDetalleProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
    const url = `DetalleProduccionDiaria/ObtenerDetalleProduccionDiaria?idEncabezadoProduccionDiaria=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}



/**
 * desglose 
 */

/**
 * placas por turno 
 */

export const AgregarSegmentoDetalleProduccionDiaria = async (data) => {
    const url = `SegmentoDetalleProduccionDiaria/InsertarSegmentoDetalleProduccionDiaria`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarSegmentoDetalleProduccionDiaria = async (data) => {
    const url = `SegmentoDetalleProduccionDiaria/actualizarsegmentodetalleproducciondiaria`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerSegmentoDetalleProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
    const url = `SegmentoDetalleProduccionDiaria/ObtenerSegmentoDetalleProduccionDiaria?idEncabezadoProduccion=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}
/**
 * placas por turno 
 */

/**
 * total produccion diaria
 */
export const InsertarTotalesProduccionDiaria = async (data) => {
    const url = `TotalProduccionDiaria/insertartotalesproducciondiaria`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarTotalesProduccionDiaria = async (data) => {
    const url = `TotalProduccionDiaria/actualizartotalesproducciondiaria`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ObtenerTotalProduccionDiaria = async (data) => {
    const url = `TotalProduccionDiaria/ObtenerTotalProduccionDiaria?fecha=${data.fecha}&idPlanta=${data.idPlanta}&idProducto=${data.idProducto}`;
    return await ProcesarDatosApi('GET', url);
}

/**
 * total produccion diaria
 */

/**
 * Observacion mantenimiento
 */

export const InsertarObservacionMantenimiento = async (data) => {
    const url = `ObservacionMantenimiento/insertarobservacionmantenimiento`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarObservacionMantenimiento = async (data) => {
    const url = `ObservacionMantenimiento/actualizarobservacionmantenimiento`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const EliminarObservacionMantenimiento = async (data) => {
    const url = `ObservacionMantenimiento/EliminarObservacionMantenimiento?idObservacionesMantenimiento=${data.idObservacionesMantenimiento}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerDetalleObservacionMantenimiento = async (idObservacionesMantenimiento) => {
    const url = `ObservacionMantenimiento/obtenerdetalleobservacionmantenimiento?idObservacionesMantenimiento=${idObservacionesMantenimiento}`;
    return await ProcesarDatosApi('GET', url);
}
/**
 * Observacion mantenimiento
 */

/**
 * Agregados
 */

export const InsertarAgregados = async (data) => {
    const url = `AgregadosProduccionDiaria/insertaragregados`;
    return await ProcesarDatosApi('POST', url, data);
}

export const EliminarAgregados = async (data) => {
    const url = `AgregadosProduccionDiaria/eliminaragregados?idAgregadoProduccionDiaria=${data.idAgregadoProduccionDiaria}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerDetalleAgregados = async (idEncabezadoProduccionDiaria) => {
    const url = `AgregadosProduccionDiaria/ObtenerAgregados?idEncabezadoProduccionDiaria=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}

/**
 * Agregados
 */