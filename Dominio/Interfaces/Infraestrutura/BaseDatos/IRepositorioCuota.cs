using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioCuota
    {
        Task<DtoDatosSP> InsertarCuota(EntityCuota entityCuota);

        Task<DtoDatosSP> ActualizarCuota(EntityCuota entityCuota);

        Task<DtoDatosSP> EliminarCuota(int idCuota);

        Task<DtoCuota> ObtenerDetalleCuota(int idCuota);

        Task<List<DtoCuota>> ObtenerCuotas();
    }
}
