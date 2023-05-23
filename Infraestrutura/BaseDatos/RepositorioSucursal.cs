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
    public class RepositorioSucursal : IRepositorioSucursal
    {
        private readonly IContextoBD contextoBD;

        public RepositorioSucursal(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarSucursal(EntitySucursal entitiSucursal)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("NombreSucursal", entitiSucursal.nombreSucursal);
                data.Add("Ubicacion", entitiSucursal.ubicacion);
                string query = "SPInsertarSucursal";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarSucursal(EntitySucursal entitiSucursal)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdSucursal", entitiSucursal.idSucursal);
                data.Add("NombreSucursal", entitiSucursal.nombreSucursal);
                data.Add("Estado", entitiSucursal.estado);
                data.Add("Ubicacion", entitiSucursal.ubicacion);
                string query = "SPActualizarSucursal";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarSucursal(int idSucursal)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdSucursal", idSucursal);
                string query = "SPEliminarSucursal";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoSucursal> ObtenerDetalleSucursalID(int idSucursal)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdSucursal", idSucursal);
                string query = "SPObtenerDetalleSucursalID";

                return await this.contextoBD.ObtenerDato<DtoSucursal>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoSucursal> ObtenerDetalleSucursalNombre(string nombre)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Nombre", nombre);
                string query = "SPObtenerDetalleSucursalNombre";

                return await this.contextoBD.ObtenerDato<DtoSucursal>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoSucursal>> ObtenerSucursales()
        {
            try
            {
                string query = "SPObtenerSucursales";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoSucursal>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }

}

