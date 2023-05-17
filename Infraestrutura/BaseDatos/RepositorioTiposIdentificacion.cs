using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;


namespace Infraestrutura.BaseDatos
{
    public class RepositorioTiposIdentificacion : IRepositorioTiposIdentificacion
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTiposIdentificacion(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<List<DtoTiposIdentificacion>> ObtenerTiposIdentificacion()
        {
            try
            {
                string query = "SPObtenerTiposIdentificacion";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoTiposIdentificacion>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
