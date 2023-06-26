using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.EstadoPlan
{
    public interface IServicioEstadoPlan
    {
        Task<DtoDatosSP> InsertarEstadoPlan(EntityEstadoPlan entitiEstadoPlan);

        Task<DtoDatosSP> ActualizarEstadoPlan(EntityEstadoPlan entitiEstadoPlan);

        Task<DtoDatosSP> EliminarEstadoPlan(int idEstadoPlan);

        Task<DtoEstadoPlan> ObtenerDetalleEstadoPlan(int idEstadoPlan);

        Task<List<DtoEstadoPlan>> ObtenerEstadosPlan();
    }
}
