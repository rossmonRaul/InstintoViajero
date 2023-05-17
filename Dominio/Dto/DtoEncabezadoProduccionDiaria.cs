using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoEncabezadoProduccionDiaria
    {
        public int IdEncabezadoProduccionDiaria { get; set; }
        public DateTime? Fecha { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFinal { get; set; }
        public int IdPlanta { get; set; }
        public int IdProducto { get; set; }
        public string Planta { get; set; }
        public string Producto { get; set; }

        public int estatus { get; set; }
    }
}
