using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoObservacionMantenimiento
    {
        public int idObservacionesMantenimiento { get; set; }

        public string descripcion { get; set; }

        public string estado { get; set; }

        public int idEncabezadoProduccionDiaria { get; set; }
    }
}
