using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioRegalia
    {
        Task<DtoDatosSP> InsertarRegalia(EntityRegalia entityRegalia);

        Task<DtoDatosSP> ActualizarRegalia(EntityRegalia entityRegalia);

        Task<DtoDatosSP> EliminarRegalia(int idRegalia);

        Task<DtoRegalia> ObtenerDetalleRegalia(int idRegalia);

        Task<List<DtoRegalia>> ObtenerRegalias();
    }
}
