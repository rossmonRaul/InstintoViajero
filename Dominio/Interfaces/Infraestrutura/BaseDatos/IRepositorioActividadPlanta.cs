using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioActividadPlanta
    {

        Task<DtoDatosSP> InsertarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta);

        Task<DtoDatosSP> ActualizarActividadPlanta(EntitiActividadPlanta entitiActividadPlanta);

        Task<DtoDatosSP> EliminarActividadPlanta(int idActividadPlanta);

        Task<DtoActividadPlanta> ObtenerDetalleActividadPlantaID(int idActividadPlanta);

        Task<List<DtoActividadPlanta>> ObtenerActividadesPlantas();
    }
}
