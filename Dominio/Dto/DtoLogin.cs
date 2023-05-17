using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoLogin
    {
        public int idUsuario { get; set; }
        public string? nombre { get; set; }

        public string? primerApellido { get; set; }

        public string? segundoApellido { get; set; }

        public string? descripcion { get; set; }

        public int? esPrimeraSesion { get; set; }
        public int? idPlanta { get; set; }
        public string nombrePlanta { get; set; }
    }
}
