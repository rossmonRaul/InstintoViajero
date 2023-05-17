using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiObservacionMantenimiento
    {
        public int idObservacionesMantenimiento { get; set; }

        public string descripcion { get; set; }

        public int idEncabezadoProduccionDiaria { get; set; }
    }
}
