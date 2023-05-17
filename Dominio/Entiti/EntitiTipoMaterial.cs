using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiTipoMaterial
    {

        public int idTipoMaterial { get; set; }

        public string nombre { get; set; }

        public string descripcion { get; set; }

        public string unidadMedida { get; set; }

        public int idGrupoTipoMaterial { get; set; }
        public bool estado { get; set; }

    }
}
