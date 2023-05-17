using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiSegmentoDetalleProduccion
    {
        public int IdEncabezadoProduccionDiaria { get; set; }
        public int? IdSegmentosDetallesProduccionesDiarias { get; set; }
        public int IdTurno { get; set; }
        public int PlacaInicio { get; set; }
        public int PlacaFinal { get; set; }
        public int Conteo { get; set; }
    }
}

