using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoDetalleProduccionDiaria
    {

        public int idDetalleProduccionDiaria { get; set; }

        public int idHorario { get; set; }

        public string hora { get; set; } 

        public int placas { get; set; }
        public string observacion { get; set; }


    }
}
