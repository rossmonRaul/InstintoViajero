using Dominio.Dto;
using Dominio.Interfaces.Aplicacion.TiposIdentificacion;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.TiposIdentificacion
{
    public class ServicioTiposIdentificacion : IServicioTiposIdentificacion
    {
        private readonly IRepositorioTiposIdentificacion repositorioTiposIdentificacion;

        public ServicioTiposIdentificacion(IRepositorioTiposIdentificacion repositorioTiposIdentificacion)
        {
            this.repositorioTiposIdentificacion = repositorioTiposIdentificacion;
        }

        public async Task<List<DtoTiposIdentificacion>> ObtenerTiposIdentificacion()
        {
            return await this.repositorioTiposIdentificacion.ObtenerTiposIdentificacion();
        }
    }
}
