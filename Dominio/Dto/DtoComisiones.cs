using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoComisiones
    {
        public int idComision { get; set; }
        public int idRol { get; set; }
        public double porcentajeComision { get; set; }
        public string descripcion{ get; set; }
        public string descripcionRol { get; set; }
        public string estado { get; set; }
        public DateTime? fechaCreacion { get; set; }
        public DateTime? fechaModificacion { get; set; }

    }
}
