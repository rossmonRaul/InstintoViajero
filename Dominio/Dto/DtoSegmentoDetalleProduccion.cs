using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoSegmentoDetalleProduccion
    {
        public int IdSegmentosDetallesProduccionesDiarias { get; set; }
        public string IdTurno { get; set; }
        public int PlacaInicio { get; set; }
        public int PlacaFinal { get; set; }
        public int Conteo { get; set; }
    }
}
