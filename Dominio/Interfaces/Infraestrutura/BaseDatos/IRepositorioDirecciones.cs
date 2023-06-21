using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioDirecciones
    {
      

        Task<List<DtoProvincia>> ObtenerProvincias();
        Task<List<DtoCanton>> ObtenerCantones(int idProvincia);
        Task<List<DtoDistrito>> ObtenerDistritos(int idCanton);
    }
}
