using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Producto
{
    public interface IServicioProducto
    {

        Task<DtoDatosSP> InsertarProducto(EntitiProducto entitiProducto);

        Task<int> ObtenerUltimoProductoInsertado();

        Task<DtoDatosSP> InsertarTipoMaterialProducto(int idProducto, int item);

        Task<DtoDatosSP> ActualizarProducto(EntitiProducto entitiProducto);

        Task<DtoDatosSP> ActualizarTipoMaterialProducto(int idTipoMaterialProducto, int estado);

        Task<DtoDatosSP> EliminarProducto(int idProducto);

        Task<DtoProducto> ObtenerDetalleProductoID(int idProducto);

        Task<List<DtoProducto>> ObtenerProductos();

        Task<List<DtoTipoMaterialProducto>> ObtenerTipoMaterialProducto(int idProducto);
    }
}
