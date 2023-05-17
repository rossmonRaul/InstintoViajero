using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoTipoMaterial
    {

        public int idTipoMaterial { get; set; }

        public string nombre { get; set; }

        public string descripcion { get; set; }

        public string grupoTipoMaterial { get; set; }

        public int idGrupoMaterial { get; set; }

        public string unidadMedida { get; set; }

        public string estado { get; set; }

        public DateTime? fechaCreacion { get; set; }

        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }
}
