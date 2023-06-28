using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Regalia
{
    public interface IServicioRegalia
    {
        Task<DtoDatosSP> InsertarRegalia(EntityRegalia entitiRegalia);

        Task<DtoDatosSP> ActualizarRegalia(EntityRegalia entitiRegalia);

        Task<DtoDatosSP> EliminarRegalia(int idRegalia);

        Task<DtoRegalia> ObtenerDetalleRegalia(int idRegalia);

        Task<List<DtoRegalia>> ObtenerRegalias();

    }
}

