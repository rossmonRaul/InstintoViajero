using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Rol
{
    public interface IServicioRol
    {
    
        Task<DtoDatosSP> InsertarRol(EntityRol entitiRol);

        Task<DtoDatosSP> ActualizarRol(EntityRol entitiRol);

        Task<DtoDatosSP> EliminarRol(int idRol);

        Task<DtoRol> ObtenerDetalleRol(int idRol);
        Task<List<DtoRol>> ObtenerRoles();
    }
}
