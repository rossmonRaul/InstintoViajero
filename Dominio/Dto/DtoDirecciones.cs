using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoProvincia
    {

        public int? id_provincia { get; set; }
        public string? dsc_provincia { get; set; }
        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }

    public class DtoCanton
    {

        public int id_canton { get; set; }
        public string cod_cantones { get; set; }
        public int id_provincia { get; set; }
        public string dsc_canton { get; set; }
        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }

    public class DtoDistrito
    {

        public int id_distrito { get; set; }
        public string cod_distrito { get; set; }
        public int id_canton { get; set; }
        public int id_provincia { get; set; }
        public string dsc_distrito { get; set; }
        public DateTime? FechaModificacion { get; set; }

        public string? UsuarioCreacion { get; set; }

        public string? UsuarioModificacion { get; set; }

        public string? Accion { get; set; }
    }
}
