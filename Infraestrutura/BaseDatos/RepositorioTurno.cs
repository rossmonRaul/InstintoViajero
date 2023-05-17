using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioTurno : IRepositorioTurno
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTurno(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
    }
}
