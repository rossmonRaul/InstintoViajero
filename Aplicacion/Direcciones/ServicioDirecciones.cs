using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Producto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Producto
{
    

    public class ServicioDirecciones : IServicioDirecciones
    {
        private readonly IRepositorioDirecciones repositorioDirecciones;

        public ServicioDirecciones(IRepositorioDirecciones repositorioDirecciones)
        {
            this.repositorioDirecciones = repositorioDirecciones;
        }

        public async Task<List<DtoProvincia>> ObtenerProvincias()
        {
            return await this.repositorioDirecciones.ObtenerProvincias();
        }

        public async Task<List<DtoCanton>> ObtenerCantones(int idProvincia)
        {
            return await this.repositorioDirecciones.ObtenerCantones(idProvincia);
        }

        public async Task<List<DtoDistrito>> ObtenerDistritos(int idCanton)
        {
            return await this.repositorioDirecciones.ObtenerDistritos(idCanton);
        }
    }
}
