using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Plazo
{
    public interface IServicioPlazo
    {
        Task<DtoDatosSP> InsertarPlazo(EntityPlazo entitiPlazo);

        Task<DtoDatosSP> ActualizarPlazo(EntityPlazo entitiPlazo);

        Task<DtoDatosSP> EliminarPlazo(int idPlazo);

        Task<DtoPlazo> ObtenerDetallePlazo(int idPlazo);

        Task<List<DtoPlazo>> ObtenerPlazos();

    }
}
