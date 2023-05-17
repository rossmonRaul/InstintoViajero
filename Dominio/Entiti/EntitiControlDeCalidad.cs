using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiControlDeCalidad
    {

        public int idCalidad { get; set; }

        public int idProducto { get; set; }

        public string peso1 { get; set; }

        public string peso2 { get; set; }

        public string peso3 { get; set; }

        public string largo { get; set; }

        public string ancho { get; set; }

        public string espesor { get; set; }

        public string turno { get; set; }

        public int idPlanta { get; set; }

        public bool estatus { get; set; }

        public bool estado { get; set; }

    }
}
