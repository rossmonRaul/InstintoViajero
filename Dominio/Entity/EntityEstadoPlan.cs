using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public class EntityEstadoPlan
    {
        public int idEstadoPlan { get; set; }
        public string codEstadoPlan { get; set; }
        public string descEstadoPlan { get; set; }
        public bool estado { get; set; }
    }
}

