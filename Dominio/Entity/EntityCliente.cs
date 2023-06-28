using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public class EntityCliente
    {
        public int idCliente { get; set; }
        public bool estado { get; set; }
        public int idPersona { get; set; }
        public string usuario { get; set; }
    }
}
