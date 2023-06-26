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
    public class RepositorioPlazo : IRepositorioPlazo
    {
        private readonly IContextoBD contextoBD;

        public RepositorioPlazo(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarPlazo(EntityPlazo entityPlazo)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("Descripcion ", entityPlazo.descripcion);
                data.Add("Estado", entityPlazo.estado);
                data.Add("Usuario", "1");
                string query = "SPInsertarPlazo";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarPlazo(EntityPlazo entityPlazo)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdPlazo", entityPlazo.idPlazo);
                data.Add("Descripcion", entityPlazo.descripcion);
                data.Add("Estado", entityPlazo.estado);
                data.Add("Usuario", "1");
                string query = "SPActualizarPlazo";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarPlazo(int idPlazo)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPlazo", idPlazo);
                data.Add("Usuario", "1"); //cambiar logica para guardar usuario
                string query = "SPEliminarPlazo";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoPlazo> ObtenerDetallePlazo(int idPlazo)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPlazo", idPlazo);
                string query = "SPObtenerDetallePlazo";

                return await this.contextoBD.ObtenerDato<DtoPlazo>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoPlazo>> ObtenerPlazos()
        {
            try
            {
                string query = "SPObtenerPlazos";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoPlazo>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
