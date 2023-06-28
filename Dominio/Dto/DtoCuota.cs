using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoCuota
    {
        public int idCuota { get; set; }
        public string codigo { get; set; }
        public double cuotaSemanal { get; set; }
        public double monto { get; set; }
        public string estado { get; set; }
        public DateTime? fechaCreacion { get; set; }
        public DateTime? fechaModificacion { get; set; }
    }
}
