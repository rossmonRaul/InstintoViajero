using Dominio.Dto;
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

        public async Task<List<DtoRol>> ObtenerRoles()
        {
            return await this.repositorioRol.ObtenerRoles();
        }
    }
}
