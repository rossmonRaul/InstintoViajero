using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoProducto
    {
        public int idProducto { get; set; }

        public string nombreProducto { get; set; }
        public string grupoProducto { get; set; }

        public string descripcionProducto { get; set; }

        public decimal factor { get; set; }
        public string unidadMedida { get; set; }

        public string estado { get; set; }

        public DateTime? fechaCreacion { get; set; }

        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }
}
