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
    public class RepositorioClubDeViaje : IRepositorioClubDeViaje
    {
        private readonly IContextoBD contextoBD;

        public RepositorioClubDeViaje(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> ActualizarClubDeViaje(EntityClubDeViaje entityClubDeViaje)
        {
            try
            {
                entityClubDeViaje.UsuarioModificacion = "Pedro";
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", entityClubDeViaje.id);
              
                data.Add("UsuarioModificacion", entityClubDeViaje.UsuarioModificacion);

                string query = "SPActualizarClubDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarClubDeViaje(int idClubDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idClubDeViaje);
               
                string query = "SPEliminarClubDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> InsertarClubDeViaje(EntityClubDeViaje entityClubDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                entityClubDeViaje.UsuarioCreacion = "Juan";
              
                data.Add("UsuarioCreacion", entityClubDeViaje.UsuarioCreacion);

                string query = "SPInsertarClubDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoClubDeViaje> ObtenerDetalleClubDeViajeID(int idClubDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idClubDeViaje);
               
                string query = "SPObtenerDetalleClubDeViajeID";

                return await this.contextoBD.ObtenerDato<DtoClubDeViaje>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoClubDeViaje>> ObtenerClubDeViaje()
        {
            try
            {
                string query = "SPObtenerClubDeViaje";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoClubDeViaje>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<EntityTipoCuenta>> ObtenerTiposDeCuentas()
        {
            try
            {
                string query = "SPObtenerTiposDeCuenta";
                var result = await this.contextoBD.ObtenerListaDeDatos<EntityTipoCuenta>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<List<EntityTipoTarjeta>> ObtenerTiposDeTarjetas()
        {
            try
            {
                string query = "SPObtenerTiposDeTarjetas";
                var result = await this.contextoBD.ObtenerListaDeDatos<EntityTipoTarjeta>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<List<EntityFrecuenciaDePago>> ObtenerFrecuenciasDePago()
        {
            try
            {
                string query = "SPObtenerFrecuenciasDePago";
                var result = await this.contextoBD.ObtenerListaDeDatos<EntityFrecuenciaDePago>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
