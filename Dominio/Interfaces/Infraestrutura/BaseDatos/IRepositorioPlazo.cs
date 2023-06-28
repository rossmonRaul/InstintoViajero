using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioPlazo
    {
        Task<DtoDatosSP> InsertarPlazo(EntityPlazo entityPlazo);

        Task<DtoDatosSP> ActualizarPlazo(EntityPlazo entityPlazo);

        Task<DtoDatosSP> EliminarPlazo(int idPlazo);

        Task<DtoPlazo> ObtenerDetallePlazo(int idPlazo);

        Task<List<DtoPlazo>> ObtenerPlazos();
    }
}
