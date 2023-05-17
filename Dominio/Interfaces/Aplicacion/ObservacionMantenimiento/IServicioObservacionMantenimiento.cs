using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.ObservacionMantenimiento
{
    public interface IServicioObservacionMantenimiento
    {
        Task<DtoDatosSP> InsertarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento);

        Task<DtoDatosSP> ActualizarObservacionMantenimiento(List<EntitiObservacionMantenimiento> entitiObservacionMantenimiento);

        Task<DtoDatosSP> EliminarObservacionMantenimiento(int idObservacionesMantenimiento);

        Task<List<DtoObservacionMantenimiento>> ObtenerObservacionMantenimientoPorEncabezado(int idEncabezadoProduccionDiaria);
        Task<List<DtoObservacionMantenimiento>> ObtenerObservacionesMantenimiento();
        Task<List<DtoObservacionMantenimiento>> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento);
    }
}
