using Dominio.Dto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioGrupoProducto : IRepositorioGrupoProducto
    {
        private readonly IContextoBD contextoBD;

        public RepositorioGrupoProducto(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<List<DtoGrupoProducto>> ObtenerGrupoProductos()
        {
            try
            {
                string query = "SPObtenerGrupoProductos";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoGrupoProducto>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
