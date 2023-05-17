using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioRol : IRepositorioRol
    {
        private readonly IContextoBD contextoBD;

        public RepositorioRol(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<List<DtoRol>> ObtenerRoles()
        {
            try
            {
                string query = "SPObtenerRoles";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoRol>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
