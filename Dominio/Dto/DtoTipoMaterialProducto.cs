using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoTipoMaterialProducto
    {

        public int idTipoMaterialProducto { get; set; }
        public int idTipoMaterial { get; set; }

        public string nombre { get; set; }

        public string descripcion{ get; set; }

    }
}
