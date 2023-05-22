
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioReporte : IRepositorioReporte
    {
        private readonly IContextoBD contextoBD;

        public RepositorioReporte(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
       
    }
}
