using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Surcusal;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Sucursal
{
    public class ServicioSucursal : IServicioSucursal
    {
        private readonly IRepositorioSucursal repositorioSucursal;

        public ServicioSucursal(IRepositorioSucursal repositorioSucursal)
        {
            this.repositorioSucursal = repositorioSucursal;
        }

        public async Task<DtoDatosSP> InsertarSucursal(EntitiSucursal entitiSucursal)
        {
            return await this.repositorioSucursal.InsertarSucursal(entitiSucursal);
        }

        public async Task<DtoDatosSP> ActualizarSucursal(EntitiSucursal entitiSucursal)
        {
            return await this.repositorioSucursal.ActualizarSucursal(entitiSucursal);
        }

        public async Task<DtoDatosSP> EliminarSucursal(int idSucursal )
        {
            return await this.repositorioSucursal.EliminarSucursal(idSucursal);
        }

        public async Task<DtoSucursal> ObtenerDetalleSucursalID(int idSucursal)
        {
            return await this.repositorioSucursal.ObtenerDetalleSucursalID(idSucursal);
        }

        public async Task<DtoSucursal> ObtenerDetalleSucursalNombre(string nombre)
        {
            return await this.repositorioSucursal.ObtenerDetalleSucursalNombre(nombre);
        }

        public async Task<List<DtoSucursal>> ObtenerSucursales()
        {
            return await this.repositorioSucursal.ObtenerSucursales();
        }

    }
}
