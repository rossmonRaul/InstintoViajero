using Dominio.Dto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioGrupoTipoMaterial : IRepositorioGrupoTipoMaterial
    {
        private readonly IContextoBD contextoBD;

        public RepositorioGrupoTipoMaterial(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<List<DtoGrupoTipoMaterial>> ObtenerGrupoTiposMaterial()
        {
            try
            {
                string query = "SPObtenerGrupoTiposMaterial";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoGrupoTipoMaterial>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
