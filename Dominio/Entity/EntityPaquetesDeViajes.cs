using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entity
{
    public class EntityPaquetesDeViajes
    {
        public int? id { get; set; }
        public string? Descripcion { get; set; }
        public string? ObservacionesGenerales { get; set; }
        public double? PrecioTotal { get; set; }
        public int? CantidadCampos { get; set; }
        //public int? IdGrupo { get; set; }
        //public int? CantidadCuotas { get; set; }
        public bool TieneRegalias { get; set; }
        public bool TieneDescuentos { get; set; }
        public bool? Estado { get; set; }
        public DateTime? FechaSalida { get; set; }
        public DateTime? FechaLLegada { get; set; }
        public DateTime? FechaCreacion { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public string? UsuarioCreacion { get; set; }
        public string? UsuarioModificacion { get; set; }
    }
}