using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiDetalleProduccionDiaria
    {
        public int idEncabezadoProduccionDiaria { get; set; }

        public int idHorario { get; set; }

        public int placas { get; set; }

        public string? observacion { get; set; }
    }
}
