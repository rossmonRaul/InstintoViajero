using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioProducto : IRepositorioProducto
    {
        private readonly IContextoBD contextoBD;

        public RepositorioProducto(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarProducto(EntitiProducto entitiProducto)
        {
            try
            {

                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("NombreProducto", entitiProducto.nombreProducto);
                data.Add("DescripcionProducto", entitiProducto.descripcionProducto);
                data.Add("Factor", entitiProducto.factor);
                data.Add("UnidadMedida", entitiProducto.unidadMedida);
                data.Add("IdGrupoProducto", entitiProducto.idGrupoProducto);

                //se inserta el producto normal sin los tipos de materiales
                string query = "SPInsertarProducto";
                var returnValue = await this.contextoBD.EjecutarSP(query, data);
                
                return returnValue;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<int> ObtenerUltimoProductoInsertado()
        {
            try
            {
                //se obtiene el id del producto ingresado
                var query = "SPObtenerUltimoProducto";
                var result = await this.contextoBD.ObtenerListaDeDatos<int>(query);
                //se guarda el id
                var idProducto = result.FirstOrDefault();

                return idProducto;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> InsertarTipoMaterialProducto(int idProducto, int item)
        {
            try
            {

                //se crea query para insertar en tabla intermedia
                string queryTipoMateriales = "SPInsertarTiposMaterialesProducto";
                Dictionary<string, object> dataTipoMateriales = new Dictionary<string, object>();
                dataTipoMateriales.Add("IdTipoMaterial", item);
                dataTipoMateriales.Add("IdProducto", idProducto);

                var value = await this.contextoBD.EjecutarSP(queryTipoMateriales, dataTipoMateriales);

                return value;
            }
            catch (Exception)
            {
                throw;
            }

        }

        public async Task<DtoDatosSP> ActualizarProducto(EntitiProducto entitiProducto)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdProducto", entitiProducto.idProducto);
                data.Add("NombreProducto", entitiProducto.nombreProducto);
                data.Add("DescripcionProducto", entitiProducto.descripcionProducto);
                data.Add("Factor", entitiProducto.factor);
                data.Add("UnidadMedida", entitiProducto.unidadMedida);
                data.Add("IdGrupoProducto", entitiProducto.idGrupoProducto);

                string query = "SPActualizarProducto";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarTipoMaterialProducto(int idTipoMaterialProducto, int estado)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdTipoMaterialProducto", idTipoMaterialProducto);
                data.Add("Estado",estado);
                string query = "SPActualizarTiposMaterialesProducto";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarProducto(int idProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdProducto", idProducto);
                string query = "SPEliminarProducto";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoProducto> ObtenerDetalleProductoID(int idProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdProducto", idProducto);
                string query = "SPObtenerDetalleProductoID";

                return await this.contextoBD.ObtenerDato<DtoProducto>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<List<DtoProducto>> ObtenerProductos()
        {
            try
            {
                string query = "SPObtenerProducto";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoProducto>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoTipoMaterialProducto>> ObtenerTipoMaterialProducto(int idProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdProducto", idProducto);
                string query = "SPObtenerTiposMaterialesProducto";

                return await this.contextoBD.ObtenerListaDeDatos<DtoTipoMaterialProducto>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
