using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioProducto
    {
        Task<DtoDatosSP> InsertarProducto(EntityProducto entitiProducto);

        Task<DtoDatosSP> ActualizarProducto(EntityProducto entitiProducto);

        Task<DtoDatosSP> EliminarProducto(int idProducto);

        Task<DtoProducto> ObtenerDetalleProductoID(int idProducto);

        Task<DtoProducto> ObtenerDetalleProductoNombre(string nombre);

        Task<List<DtoProducto>> ObtenerProductoes();
        Task<List<EntityTipoProducto>> ObtenerTiposProductos();
    }
}
