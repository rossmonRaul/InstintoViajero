using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoEstadoPlan
    {
        public int idEstadoPlan { get; set; }
        public string codEstadoPlan { get; set; }
        public string DescEstadoPlan { get; set; }
        public string estado { get; set; }
        public DateTime? fechaCreacion { get; set; }
        public DateTime? fechaModificacion { get; set; }

    }
}
