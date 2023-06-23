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
    public class RepositorioTourDeViaje : IRepositorioTourDeViaje
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTourDeViaje(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> ActualizarTourDeViaje(EntityTourDeViaje entityTourDeViaje)
        {
            try
            {
                entityTourDeViaje.UsuarioModificacion = "Pedro";
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", entityTourDeViaje.id);
                data.Add("Descripcion", entityTourDeViaje.Descripcion);                
                data.Add("Precio", entityTourDeViaje.Precio);               
                data.Add("Observaciones", entityTourDeViaje.Observaciones);
                data.Add("FechaSalida", entityTourDeViaje.FechaSalida);
                data.Add("FechaLLegada", entityTourDeViaje.FechaLLegada);
                data.Add("UsuarioModificacion", entityTourDeViaje.UsuarioModificacion);

                string query = "SPActualizarTourDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarTourDeViaje(int idTourDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idTourDeViaje);
               
                string query = "SPEliminarTourDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> InsertarTourDeViaje(EntityTourDeViaje entityTourDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                entityTourDeViaje.UsuarioCreacion = "Juan";
                data.Add("Descripcion", entityTourDeViaje.Descripcion);                
                data.Add("Precio", entityTourDeViaje.Precio);                
                data.Add("Observaciones", entityTourDeViaje.Observaciones);                
                data.Add("FechaSalida", entityTourDeViaje.FechaSalida);
                data.Add("FechaLLegada", entityTourDeViaje.FechaLLegada);
                data.Add("UsuarioCreacion", entityTourDeViaje.UsuarioCreacion);

                string query = "SPInsertarTourDeViaje";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoTourDeViaje> ObtenerDetalleTourDeViajeID(int idTourDeViaje)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("id", idTourDeViaje);
               
                string query = "SPObtenerDetalleTourDeViajeID";

                return await this.contextoBD.ObtenerDato<DtoTourDeViaje>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoTourDeViaje>> ObtenerTourDeViaje()
        {
            try
            {
                string query = "SPObtenerTourDeViaje";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoTourDeViaje>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
