using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiTotalesProduccionDiaria
    {
        public int idEncabezadoProduccionDiaria { get; set; }

        public int idTotalesProduccionDiaria { get; set; }

        public int placasTotales { get; set; }

        public int unidadesTotales { get; set; }

        public int cubosTotales { get; set; }

        public int mermaTotal { get; set; }

        public int mezclasPerdidas { get; set; }

        public int numeroMezclas { get; set; }

        public int cemento { get; set; }

        public int cantidadColor { get; set; }


        public string color { get; set; }

        public string aditivo { get; set; }
    }
}
