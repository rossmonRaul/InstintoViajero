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
    

    public class ServicioProducto : IServicioProducto
    {
        private readonly IRepositorioProducto repositorioProducto;

        public ServicioProducto(IRepositorioProducto repositorioProducto)
        {
            this.repositorioProducto = repositorioProducto;
        }


        public async Task<DtoDatosSP> InsertarProducto(EntityProducto entityProducto)
        {
            return await this.repositorioProducto.InsertarProducto(entityProducto);
        }

        public async Task<DtoDatosSP> ActualizarProducto(EntityProducto entityProducto)
        {
            return await this.repositorioProducto.ActualizarProducto(entityProducto);
        }

        public async Task<DtoDatosSP> EliminarProducto(int idProducto)
        {
            return await this.repositorioProducto.EliminarProducto(idProducto);
        }

        public async Task<DtoProducto> ObtenerDetalleProductoID(int idProducto)
        {
            return await this.repositorioProducto.ObtenerDetalleProductoID(idProducto);
        }

        public async Task<DtoProducto> ObtenerDetalleProductoNombre(string nombre)
        {
            return await this.repositorioProducto.ObtenerDetalleProductoNombre(nombre);
        }

        public async Task<List<DtoProducto>> ObtenerProductoes()
        {
            return await this.repositorioProducto.ObtenerProductoes();
        }
    }
}
