using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public  class EntityComision
    {
        public int idComision { get; set; }
        public int idRol { get; set; }
        public double porcentajeComision { get; set; }
        public bool estado { get; set; }
        public string descripcion { get; set; }

    }
}
