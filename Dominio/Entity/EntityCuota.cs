using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public class EntityCuota
    {
        public int idCuota { get; set; }
        public string codigo { get; set; }
        public double cuotaSemanal { get; set; }
        public double monto { get; set; }
        public bool estado { get; set; }
    }
}
