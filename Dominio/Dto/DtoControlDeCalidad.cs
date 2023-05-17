using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoControlDeCalidad
    {

        public int idCalidad { get; set; }

        public int? idProducto { get; set; }

        public string peso1 { get; set; }

        public string peso2 { get; set; }

        public string peso3 { get; set; }

        public string largo { get; set; }

        public string ancho { get; set; }

        public string espesor { get; set; }

        public string turno { get; set; }

        public int? idPlanta { get; set; }

        public string? nombrePlanta   { get; set; }

        public string? nombreProducto { get; set; }

        public string estatus { get; set; }

        public string estado { get; set; }

        public DateTime? fechaCreacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? accion { get; set; }

    }
}
