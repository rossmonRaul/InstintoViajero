using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Cuota
{
    public interface IServicioCuota
    {
        Task<DtoDatosSP> InsertarCuota(EntityCuota entitiCuota);

        Task<DtoDatosSP> ActualizarCuota(EntityCuota entitiCuota);

        Task<DtoDatosSP> EliminarCuota(int idCuota);

        Task<DtoCuota> ObtenerDetalleCuota(int idCuota);

        Task<List<DtoCuota>> ObtenerCuotas();

    }
}

