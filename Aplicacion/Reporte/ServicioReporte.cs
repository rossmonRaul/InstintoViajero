using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Reporte;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion.Reporte
{
    public class ServicioReporte : IServicioReporte
    {
        private readonly IRepositorioReporte repositorioReporte;

        public ServicioReporte(IRepositorioReporte repositorioReporte)
        {
            this.repositorioReporte = repositorioReporte;
        }

    }
}
