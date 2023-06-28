using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoTourDeViaje
    {
        public int? id { get; set; }
        public string? Descripcion { get; set; }
        public string? Observaciones { get; set; }
        public double? Precio { get; set; }
        public DateTime? FechaSalida { get; set; }
        public DateTime? FechaLLegada { get; set; }
        public string? Estado { get; set; }
        public DateTime? FechaCreacion { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public string? UsuarioCreacion { get; set; }
        public string? UsuarioModificacion { get; set; }
        public string? accion { get; set; }
    }
}
