using Dominio.Dto;
using Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Producto
{
    public interface IServicioProducto
    {
        Task<DtoDatosSP> ActualizarProducto(EntityProducto entitiProducto);
        Task<DtoDatosSP> EliminarProducto(int idProducto);
        Task<DtoDatosSP> InsertarProducto(EntityProducto entitiProducto);
        Task<DtoProducto> ObtenerDetalleProductoID(int idProducto);
        Task<DtoProducto> ObtenerDetalleProductoNombre(string nombre);
        Task<List<DtoProducto>> ObtenerProductoes();
    }
}
