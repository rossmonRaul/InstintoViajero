using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Producto
{
    public interface IServicioDirecciones
    {
        Task<List<DtoProvincia>> ObtenerProvincias();
        Task<List<DtoCanton>> ObtenerCantones(int idProvincia);
        Task<List<DtoDistrito>> ObtenerDistritos(int idCanton);
    }
}
