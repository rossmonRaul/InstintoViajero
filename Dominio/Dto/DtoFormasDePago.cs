using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoFormasDePago
    {
        public int? Id { get; set; }
        public string? CodFormaDePago { get; set; }
        public string? Descripcion { get; set; }
        public string? Estado { get; set; }                
        public DateTime? fechaCreacion { get; set; }

        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }
}
