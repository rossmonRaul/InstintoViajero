using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoVendedor
    {
        public int idVendedor { get; set; }
        public string codVendedor { get; set; }
        public DateTime? fechaContratacion { get; set; }
        public string estado { get; set; }
        public DateTime? fechaCreacion { get; set; }
        public int idPersona { get; set; }
        public int identificacion { get; set; }
        public string nombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public DateTime? fechaNacimiento { get; set; }
        public string direccion { get; set; }
        public string estadoPersona { get; set; }
        public int idSucursal { get; set; }
        public string nombreSucursal { get; set; }
        public string ubicacion { get; set; }
        public string estadoSucursal { get; set; }
        public int idTipoIdentificacion { get; set; }
        public string descripcion { get; set; }

    }
}
