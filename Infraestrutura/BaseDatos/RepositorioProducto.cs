using Dominio.Dto;
using Dominio.Entity;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioProducto : IRepositorioProducto
    {
        private readonly IContextoBD contextoBD;

        public RepositorioProducto(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
        public async Task<DtoDatosSP> ActualizarProducto(EntityProducto entitiProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", entitiProducto.Nombre);
                data.Add("CodProducto", entitiProducto.CodProducto);
                data.Add("IdTipo", entitiProducto.IdTipo);
                data.Add("id", entitiProducto.Id);

                string query = "SPActualizarProducto";

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

        public async Task<DtoDatosSP> InsertarProducto(EntityProducto entitiProducto)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", entitiProducto.Nombre);
                data.Add("CodProducto", entitiProducto.CodProducto);
                data.Add("IdTipo", entitiProducto.IdTipo);
                string query = "SPInsertarProducto";

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
                data.Add("id", idProducto);
                string query = "SPObtenerDetalleProductoID";

                return await this.contextoBD.ObtenerDato<DtoProducto>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoProducto> ObtenerDetalleProductoNombre(string nombre)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", nombre);
                string query = "SPObtenerDetalleProductoNombre";

                return await this.contextoBD.ObtenerDato<DtoProducto>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoProducto>> ObtenerProductoes()
        {
            try
            {
                string query = "SPObtenerProductos";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoProducto>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<EntityTipoProducto>> ObtenerTiposProductos()
        {
            try
            {
                string query = "SPObtenerTiposProductos";
                var result = await this.contextoBD.ObtenerListaDeDatos<EntityTipoProducto>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
