using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Aplicacion.Vendedor;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Vendedor
{
    public class ServicioVendedor : IServicioVendedor
    {
        private readonly IRepositorioVendedor repositorioVendedor;

        public ServicioVendedor(IRepositorioVendedor repositorioVendedor)
        {
            this.repositorioVendedor = repositorioVendedor;
        }

        public async Task<DtoDatosSP> InsertarVendedor(EntityVendedor entityVendedor)
        {
            return await this.repositorioVendedor.InsertarVendedor(entityVendedor);
        }

        public async Task<DtoDatosSP> ActualizarVendedor(EntityVendedor entityVendedor)
        {
            return await this.repositorioVendedor.ActualizarVendedor(entityVendedor);
        }

        public async Task<DtoDatosSP> EliminarVendedor(int idVendedor)
        {
            return await this.repositorioVendedor.EliminarVendedor(idVendedor);
        }

        public async Task<DtoVendedor> ObtenerDetalleVendedor(int idVendedor)
        {
            return await this.repositorioVendedor.ObtenerDetalleVendedor(idVendedor);
        }

        public async Task<List<DtoVendedor>> ObtenerVendedores()
        {
            return await this.repositorioVendedor.ObtenerVendedores();
        }


    }
}
