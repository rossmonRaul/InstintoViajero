using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioEstadoPlan
    {
        Task<DtoDatosSP> InsertarEstadoPlan(EntityEstadoPlan entityEstadoPlan);

        Task<DtoDatosSP> ActualizarEstadoPlan(EntityEstadoPlan entityEstadoPlan);

        Task<DtoDatosSP> EliminarEstadoPlan(int idEstadoPlan);

        Task<DtoEstadoPlan> ObtenerDetalleEstadoPlan(int idEstadoPlan);

        Task<List<DtoEstadoPlan>> ObtenerEstadosPlan();
    }
}
