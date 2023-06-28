using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Rol;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Rol
{
    public class ServicioRol : IServicioRol
    {
        private readonly IRepositorioRol repositorioRol;

        public ServicioRol(IRepositorioRol repositorioRol)
        {
            this.repositorioRol = repositorioRol;
        }

        public async Task<DtoDatosSP> InsertarRol(EntityRol entityRol)
        {
            return await this.repositorioRol.InsertarRol(entityRol);
        }

        public async Task<DtoDatosSP> ActualizarRol(EntityRol entityRol)
        {
            return await this.repositorioRol.ActualizarRol(entityRol);
        }

        public async Task<DtoDatosSP> EliminarRol(int idRol)
        {
            return await this.repositorioRol.EliminarRol(idRol);
        }

        public async Task<DtoRol> ObtenerDetalleRol(int idRol)
        {
            return await this.repositorioRol.ObtenerDetalleRol(idRol);
        }

        public async Task<List<DtoRol>> ObtenerRoles()
        {
            return await this.repositorioRol.ObtenerRoles();
        }
    }
}
