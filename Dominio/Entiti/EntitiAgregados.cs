using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiAgregados
    {

        public int idEncabezadoProduccionDiaria { get; set; }

        public string descripcion { get; set; }

        public string tipoAgregado { get; set; }

        public int vueltas { get; set; }

        public string usuarioIngreso { get; set; }

    }
}
