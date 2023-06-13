using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public class EntityProducto
    {
        public int? Id { get; set; }
        public string? CodProducto { get; set; }
        public string? Nombre { get; set; }
        public int? IdTipo { get; set; }
        public EntityTipoProducto? TipoProducto { get; set; }
    }

}
