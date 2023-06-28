using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioRol
    {   
        Task<DtoDatosSP> InsertarRol(EntityRol entityRol);

        Task<DtoDatosSP> ActualizarRol(EntityRol entityRol);

        Task<DtoDatosSP> EliminarRol(int idRol);

        Task<DtoRol> ObtenerDetalleRol(int idRol);
        Task<List<DtoRol>> ObtenerRoles();
    }
}
