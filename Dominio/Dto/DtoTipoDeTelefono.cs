using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoTipoDeTelefono
    {
        public int idTipoDeTelefono { get; set; }
        public string descripcion { get; set; }
        public string estado { get; set; }
        public DateTime? fechaCreacion { get; set; }
        public DateTime? fechaModificacion { get; set; }

    }
}
