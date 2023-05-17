using Dominio.Dto;
using Dominio.Interfaces.Aplicacion.GrupoTipoMaterial;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.GrupoTipoMaterial
{
    public class ServicioGrupoTipoMaterial : IServicioGrupoTipoMaterial
    {
        private readonly IRepositorioGrupoTipoMaterial repositorioGrupoTipoMaterial;

        public ServicioGrupoTipoMaterial(IRepositorioGrupoTipoMaterial repositorioGrupoTipoMaterial)
        {
            this.repositorioGrupoTipoMaterial = repositorioGrupoTipoMaterial;
        }


        public async Task<List<DtoGrupoTipoMaterial>> ObtenerGrupoTiposMaterial()
        {
            return await this.repositorioGrupoTipoMaterial.ObtenerGrupoTiposMaterial();
        }
    }
}
