import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "reporte";
const controladorEncabezado = "encabezadoproducciondiaria"
const controladorDetalle = "detalleproducciondiaria"
const controladorSegmento = "segmentodetalleproducciondiaria"

export const ReporteProductos = async (fechaInicio, fechaFinal, idProducto) => {
    console.log(fechaInicio, fechaFinal, idProducto);
    const url = `${controlador}/reporteproductos?fechai=${fechaInicio}&fechaf=${fechaFinal}&idproducto=${idProducto}`;
    return await ProcesarDatosApi('GET', url);
}

export const ReporteAcumulativoMensual = async (fechaInicio, fechaFinal,) => {
    const url = `${controlador}/ReporteAcumulativoMensual?fechaI=${fechaInicio}&fechaF=${fechaFinal}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerEncabezadoReporte = async (idEncabezadoProduccionDiaria) => {
    const url = `${controladorEncabezado}/ObtenerProduccionDiariaPorID?idEncabezadoProduccionDiaria=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerDetalleProduccionReporte = async (idEncabezadoProduccionDiaria) => {
    const url = `${controladorDetalle}/ObtenerDetalleProduccionDiaria?idEncabezadoProduccionDiaria=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerSegmentoDetalleProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
    const url = `${controladorSegmento}/ObtenerSegmentoDetalleProduccionDiaria?idEncabezadoProduccion=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerTotalProduccionDiaria = async (data) => {
    const url = `TotalProduccionDiaria/ObtenerTotalProduccionDiaria?fecha=${data.fecha}&idPlanta=${data.idPlanta}&idProducto=${data.idProducto}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerDetalleObservacionMantenimiento = async (idEncabezadoProduccionDiaria) => {
    const url = `ObservacionMantenimiento/ObtenerObservacionMantenimientoPorEncabezado?idEncabezadoProduccionDiaria=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerDetalleAgregados = async (idEncabezadoProduccionDiaria) => {
    const url = `AgregadosProduccionDiaria/ObtenerAgregados?idEncabezadoProduccionDiaria=${idEncabezadoProduccionDiaria}`;
    return await ProcesarDatosApi('GET', url);
}




