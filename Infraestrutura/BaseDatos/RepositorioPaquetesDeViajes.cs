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
    public class RepositorioPaquetesDeViajes : IRepositorioPaquetesDeViajes
    {
        private readonly IContextoBD contextoBD;

        public RepositorioPaquetesDeViajes(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> ActualizarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes)
        {
            try
            {
                entityPaquetesDeViajes.UsuarioModificacion = "Pedro";
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", entityPaquetesDeViajes.id);
                data.Add("Descripcion", entityPaquetesDeViajes.Descripcion);
                data.Add("ObservacionesGenerales", entityPaquetesDeViajes.ObservacionesGenerales);
                data.Add("PrecioTotal", entityPaquetesDeViajes.PrecioTotal);
                data.Add("CantidadCampos", entityPaquetesDeViajes.CantidadCampos);
                //data.Add("IdGrupo", entityPaquetesDeViajes.IdGrupo);
                //data.Add("CantidadCuotas", entityPaquetesDeViajes.CantidadCuotas);
                data.Add("TieneRegalias", entityPaquetesDeViajes.TieneRegalias);
                data.Add("TieneDescuentos", entityPaquetesDeViajes.TieneDescuentos);
                data.Add("FechaSalida", entityPaquetesDeViajes.FechaSalida);
                data.Add("FechaLLegada", entityPaquetesDeViajes.FechaLLegada);
                data.Add("UsuarioModificacion", entityPaquetesDeViajes.UsuarioModificacion);

                string query = "SPActualizarPaqueteDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarPaquetesDeViajes(int idPaqueteDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idPaqueteDeViaje);
               
                string query = "SPEliminarPaqueteDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> InsertarPaquetesDeViajes(EntityPaquetesDeViajes entityPaquetesDeViajes)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                entityPaquetesDeViajes.UsuarioCreacion = "Juan";
                data.Add("Descripcion", entityPaquetesDeViajes.Descripcion);
                data.Add("ObservacionesGenerales", entityPaquetesDeViajes.ObservacionesGenerales);
                data.Add("PrecioTotal", entityPaquetesDeViajes.PrecioTotal);
                data.Add("CantidadCampos", entityPaquetesDeViajes.CantidadCampos);
                //data.Add("IdGrupo", entityPaquetesDeViajes.IdGrupo);
                //data.Add("CantidadCuotas", entityPaquetesDeViajes.CantidadCuotas);
                data.Add("TieneRegalias", entityPaquetesDeViajes.TieneRegalias);
                data.Add("TieneDescuentos", entityPaquetesDeViajes.TieneDescuentos);
                data.Add("FechaSalida", entityPaquetesDeViajes.FechaSalida);
                data.Add("FechaLLegada", entityPaquetesDeViajes.FechaLLegada);
                data.Add("UsuarioCreacion", entityPaquetesDeViajes.UsuarioCreacion);

                string query = "SPInsertarPaqueteDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoPaquetesDeViajes> ObtenerDetallePaquetesDeViajesID(int idPaqueteDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idPaqueteDeViaje);
               
                string query = "SPObtenerDetallePaqueteDeViajeID";

                return await this.contextoBD.ObtenerDato<DtoPaquetesDeViajes>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoPaquetesDeViajes>> ObtenerPaquetesDeViajes()
        {
            try
            {
                string query = "SPObtenerPaquetesDeViajes";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoPaquetesDeViajes>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
