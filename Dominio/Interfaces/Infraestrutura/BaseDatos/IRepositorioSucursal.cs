using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioSucursal
    {
        Task<DtoDatosSP> InsertarSucursal(EntitiSucursal entitiSucursal);

        Task<DtoDatosSP> ActualizarSucursal(EntitiSucursal entitiSucursal);

        Task<DtoDatosSP> EliminarSucursal(int idSucursal);

        Task<DtoSucursal> ObtenerDetalleSucursalID(int idSucursal);

        Task<DtoSucursal> ObtenerDetalleSucursalNombre(string nombre);

        Task<List<DtoSucursal>> ObtenerSucursales();

    }
}
