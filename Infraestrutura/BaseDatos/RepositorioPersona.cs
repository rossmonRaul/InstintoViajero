using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioPersona : IRepositorioPersona
    {
        private readonly IContextoBD contextoBD;

        public RepositorioPersona(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
    }
}
