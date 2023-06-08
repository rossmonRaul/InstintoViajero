using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioPersona
    {
        Task<DtoDatosSP> InsertarPersona(EntityPersona entityPersona);

        Task<DtoDatosSP> ActualizarPersona(EntityPersona entityPersona);

        Task<DtoDatosSP> EliminarPersona(int idPersona);

        Task<DtoPersona> ObtenerDetallePersona(int idPersona);

        Task<List<DtoPersona>> ObtenerPersonas();

    }
}
