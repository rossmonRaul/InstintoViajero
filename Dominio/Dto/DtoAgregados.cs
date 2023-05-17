using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoAgregados
    {
        public int idAgregadoProduccionDiaria { get; set; }

        public string descripción { get; set; }

        public string tipoAgregado { get; set; }

        public int vueltas { get; set; }

    }
}
