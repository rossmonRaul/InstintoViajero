using Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.GrupoTipoMaterial
{
    public interface IServicioGrupoTipoMaterial
    {
        Task<List<DtoGrupoTipoMaterial>> ObtenerGrupoTiposMaterial();
    }
}
