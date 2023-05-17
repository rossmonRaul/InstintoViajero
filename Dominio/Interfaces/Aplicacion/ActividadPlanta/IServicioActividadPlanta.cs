using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.ActividadPlanta
{
    public interface IServicioActividadPlanta
    {
        Task<DtoDatosSP> InsertarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta);

        Task<DtoDatosSP> ActualizarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta);

        Task<DtoDatosSP> EliminarActividadPlanta(int idActividadPlanta);

        Task<DtoActividadPlanta> ObtenerDetalleActividadPlantaID(int idActividadPlanta);

        Task<List<DtoActividadPlanta>> ObtenerActividadesPlantas();
    }
}
