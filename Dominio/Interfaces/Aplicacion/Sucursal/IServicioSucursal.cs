using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Surcusal
{
    public interface IServicioSucursal
    {
        Task<DtoDatosSP> InsertarSucursal(EntitiSucursal entitiPlanta);

        Task<DtoDatosSP> ActualizarSucursal(EntitiSucursal entitiPlanta);

        Task<DtoDatosSP> EliminarSucursal(int idPlanta);

        Task<DtoSucursal> ObtenerDetalleSucursalID(int idPlanta);

        Task<DtoSucursal> ObtenerDetalleSucursalNombre(string nombre);

        Task<List<DtoSucursal>> ObtenerSucursales();
    }
}
