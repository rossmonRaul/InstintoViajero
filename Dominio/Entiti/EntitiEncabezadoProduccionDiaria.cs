using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiEncabezadoProduccionDiaria
    {
        public int IdEncabezadoProduccionDiaria { get; set; }
        public DateTime? Fecha { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFinal { get; set; }
        public int IdPlanta { get; set; }
        public int IdProducto { get; set; }
        public int? estatus { get; set; } = 0;

    }
}
