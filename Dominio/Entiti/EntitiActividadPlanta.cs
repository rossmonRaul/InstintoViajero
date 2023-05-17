using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiActividadPlanta
    {

        public int idActividadPlanta { get; set; }

        public string observacion { get; set; }

        public bool estado { get; set; }

        public int idPlanta { get; set; }
    }
}
