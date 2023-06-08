using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoProducto
    {
        public int? Id { get; set; }
        public string? CodProducto { get; set; }
        public string? Nombre { get; set; }
        public string? Estado { get; set; }
        public int? IdTipo { get; set; }
        public EntityTipoProducto? TipoProducto { get; set; }
        public DateTime? fechaCreacion { get; set; }

        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }
}
