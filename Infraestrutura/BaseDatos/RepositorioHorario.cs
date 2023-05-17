using Dominio.Dto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioHorario : IRepositorioHorario
    {
      
            private readonly IContextoBD contextoBD;

            public RepositorioHorario(IContextoBD contextoBD)
            {
                this.contextoBD = contextoBD;
            }

            public async Task<List<DtoHorario>> ObtenerHorarios()
            {
                try
                {
                    string query = "SPObtenerHorarios";
                    var result = await this.contextoBD.ObtenerListaDeDatos<DtoHorario>(query);

                    return result;
                }
                catch (Exception)
                {
                    throw;
                }
            }
    }
}
