using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoUsuario
    {

        public int idUsuario { get; set; }
        public int idPersona { get; set; }
        public int idRol { get; set; }
        public string coreoElectronico { get; set; }
        public string contrasenaTemporal { get; set; }
        public int idSucursal { get; set; }
        public int identificacion { get; set; }
        public int idTipoIdentificacion { get; set; }
        public string nombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public DateTime? fechaNacimiento { get; set; }
        public string direccion { get; set; }
        public DateTime? fechaCreacion { get; set; }
        public string descripcion { get; set; }

        public string telefono { get; set; }
        public string nombreSucursal { get; set; }
        public string estado { get; set; }
    }
}
